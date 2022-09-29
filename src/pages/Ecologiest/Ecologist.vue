<template>
  <DataTable
    :value="applications"
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
        <Button type="button" class="p-button-rounded btn" @click="goToAppCreate">
          <i class="pi pi-plus p-mr-2" />
          Создать заявку
        </Button>
      </div>
    </template>
    <Column field="id" header="Номер заявки" :sortable="true"></Column>
    <Column field="sender_facility.name" header="Откуда" :sortable="true"></Column>
    <Column field="receiver_facility.name" header="Куда" :sortable="true"></Column>
    <Column field="created_at" header="Дата заявки">
      <template #body="slotProps">
        <span>{{ formatDate(slotProps.data.created_at) }}</span>
      </template>
    </Column>
    <Column field="status" header="Статус заявки" :sortable="true">
      <template #body="{ data }">
        <span :class="'customer-badge status-' + data.status">{{ formatApplicationStatus(data.status) }}</span>
      </template>
    </Column>
  </DataTable>
</template>
<script setup lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import { useApplicationsStore } from '@/stores/applications'
import { formatDate } from '@/utils/date-formatters'
import { formatApplicationStatus } from '@/utils/status-formatters'

defineComponent({
  name: 'Ecologiest'
})

const router = useRouter()

const dt = ref()
useApplicationsStore().fetchApplications()
const applications = computed(() => useApplicationsStore().applications)

const exportCSV = () => {
  dt.value.exportCSV()
}

const goToAppCreate = () => {
  router.push({ name: 'CreateApplication' })
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
