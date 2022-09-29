<template>
  <DataTable
    :value="reports"
    ref="dt"
    responsiveLayout="scroll"
    :resizableColumns="true"
    columnResizeMode="fit"
    showGridlines
  >
    <template #header>
      <div style="text-align: left">
        <Button
          type="button"
          icon="pi pi-external-link"
          label="Export"
          class="p-button-rounded mr-2"
          @click="exportCSV()"
        />

        <Button
          type="button"
          class="p-button-rounded btn"
          :class="currentReportType === 'year' ? 'p-button-success' : 'p-button-secondary'"
          @click.prevent="toggleReportFilter('year')"
        >
          <i v-if="currentReportType === 'year'" class="pi pi-calendar-minus" />
          <i v-else class="pi pi-calendar" />
          Годовой отчет
        </Button>
        <Button
          type="button"
          class="p-button-rounded btn"
          :class="currentReportType === 'quarter' ? 'p-button-success' : 'p-button-secondary'"
          @click.prevent="toggleReportFilter('quarter')"
        >
          <i v-if="currentReportType === 'quarter'" class="pi pi-calendar-minus" />
          <i v-else class="pi pi-calendar" />
          Квартальный отчет
        </Button>
        <Button
          type="button"
          class="p-button-rounded btn"
          :class="currentReportType === 'month' ? 'p-button-success' : 'p-button-secondary'"
          @click.prevent="toggleReportFilter('month')"
        >
          <i v-if="currentReportType === 'month'" class="pi pi-calendar-minus" />
          <i v-else class="pi pi-calendar" />
          Месячный отчет
        </Button>
      </div>
    </template>
    <Column field="sender_facility.name" header="Откуда" :sortable="true"></Column>
    <Column field="receiver_facility.name" header="Куда" :sortable="true"></Column>
    <Column field="nomenklature.name" header="Номенклатура" :sortable="true"></Column>
    <Column field="nomenklature_amount" header="Количество" :sortable="true"></Column>
    <Column field="recycling_method.name" header="Способ " :sortable="true"></Column>
    <!-- <Column field="from" header="Дата начала">
      <template #body="slotProps">
        <span>{{ formatDate(slotProps.data.from) }}</span>
      </template>
    </Column>
    <Column field="to" header="Дата конца">
      <template #body="slotProps">
        <span>{{ formatDate(slotProps.data.to) }}</span>
      </template>
    </Column> -->
  </DataTable>
</template>
<script setup lang="ts">
import Column from 'primevue/column'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import { defineComponent, ref, watch, computed } from 'vue'
import { useApplicationsStore } from '@/stores/applications'
import { formatDateShort } from '@/utils/date-formatters'
import { useRoute } from 'vue-router'

defineComponent({
  name: 'Auditor'
})

const route = useRoute()
const facility = route.params.id

const dt = ref()
const reportFilter = ref('')
const currentReportType = ref('')

const yearReport = computed(() => {
  const date = new Date()

  const startDate = new Date(date.getFullYear(), 0, 1).toString()
  const endDate = new Date(date.getFullYear(), 11, 31).toString()

  return `?from=${formatDateShort(startDate)}&to=${formatDateShort(endDate)}`
})

const quarterReport = computed(() => {
  const date = new Date()
  const startMonth = Math.floor(date.getMonth() / 3) * 3
  const endMonth = Math.floor(date.getMonth() / 3) * 3 + 2
  const startDate = new Date(date.getFullYear(), startMonth, 1).toString()
  const endDate = new Date(date.getFullYear(), endMonth + 1, 0).toString()

  return `?from=${formatDateShort(startDate)}&to=${formatDateShort(endDate)}`
})

const monthReport = computed(() => {
  const date = new Date()

  const startDate = new Date(date.getFullYear(), date.getMonth(), 1).toString()
  const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).toString()

  return `?from=${formatDateShort(startDate)}&to=${formatDateShort(endDate)}`
})

watch(reportFilter, () => {
  if (reportFilter.value) {
    useApplicationsStore().fetchApplicationReports(`${facility}${reportFilter.value}`)
  } else {
    useApplicationsStore().fetchApplicationReports(`${facility}`)
  }
})

useApplicationsStore().fetchApplicationReports(`${facility}`)
const reports = computed(() => useApplicationsStore().reports)

const exportCSV = () => {
  dt.value.exportCSV()
}

const toggleReportFilter = (reportType: string) => {
  switch (reportType) {
    case 'year':
      reportFilter.value = yearReport.value
      currentReportType.value = 'year'
      break
    case 'quarter':
      reportFilter.value = quarterReport.value
      currentReportType.value = 'quarter'
      break
    case 'month':
      reportFilter.value = monthReport.value
      currentReportType.value = 'month'
      break
    default:
      reportFilter.value = ''
      currentReportType.value = ''
      break
  }
}
</script>

<style>
.customer-badge {
  padding: 0.25em 0.5em;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.75em;
  color: #ffffff;
  text-align: center;
}
.status-pending {
  background-color: #9e9e9e;
}
.status-tech_accepted {
  background-color: #4caf50;
}
.status-tech_rejected {
  background-color: #f44336;
}
.status-driver_received {
  background-color: #2196f3;
}
.status-driver_delivered {
  background-color: #4caf50;
}
.status-recycler_placed,
.status-recycler_processed {
  background-color: #ff9800;
}
</style>
