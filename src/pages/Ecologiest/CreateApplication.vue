<template>
  <section class="container">
    <form @submit.prevent="createApplication">
      <h1>Создать заявку</h1>
      <div class="form-group">
        <label for="receiver">Куда</label>
        <Dropdown
          v-model="receiver_facility"
          :options="facilities"
          :editable="true"
          :loading="!facilities.length"
          optionLabel="name"
          optionValue="id"
          placeholder="Выберите объект"
        >
          <template #indicator>
            <div class="country-item">
              <FacilityIcon />
            </div>
          </template>
        </Dropdown>
      </div>

      <div class="form-group">
        <label for="nomenklature">Вид номенклатуры</label>
        <Dropdown
          v-model="nomenklature"
          :options="nomenklatures"
          :editable="true"
          :loading="!nomenklatures.length"
          optionLabel="name"
          optionValue="id"
          placeholder="Выберите номенклатуру"
        >
          <template #indicator>
            <div class="country-item">
              <NomenklatureIcon />
            </div>
          </template>
        </Dropdown>
      </div>
      <div class="form-group">
        <label for="nomenklature">Количество номенклатуры</label>

        <InputNumber
          v-model="nomenklature_amount"
          input-id="nomenklature_amount"
          placeholder="Количество"
          mode="decimal"
          suffix="кг"
          :min="0"
          :max="40"
          :minFractionDigits="2"
        />
      </div>
      <div class="form-group">
        <label for="nomenklature">Номер транспорта</label>

        <Dropdown
          v-model="transport"
          :options="transports"
          :editable="true"
          :loading="!transports.length"
          optionLabel="number"
          optionValue="id"
          placeholder="Выберите номер транспорта"
        >
          <template #indicator>
            <div class="country-item">
              <TransportIcon />
            </div>
          </template>
        </Dropdown>
      </div>
      <div class="form-group">
        <label for="nomenklature">Компания</label>

        <Dropdown
          v-model="company"
          :options="companies"
          :editable="true"
          :loading="!companies.length"
          optionLabel="name"
          optionValue="id"
          placeholder="Выберите компанию"
        >
          <template #indicator>
            <div class="country-item">
              <CompanyIcon />
            </div>
          </template>
        </Dropdown>
      </div>

      <div class="actions">
        <Button>Отмена</Button>
        <Button type="submit" class="btn"> Создать заявку </Button>
      </div>
    </form>
  </section>
</template>
<script setup lang="ts">
import { defineComponent, computed, ref } from 'vue'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import FacilityIcon from '@/components/icons/FacilityIcon.vue'
import NomenklatureIcon from '@/components/icons/NomenklatureIcon.vue'
import TransportIcon from '@/components/icons/TransportIcon.vue'
import CompanyIcon from '@/components/icons/CompanyIcon.vue'
import { useApplicationsStore } from '@/stores/applications'
import { useRouter } from 'vue-router'
import { notifyError, notifySuccess } from '@/services/toastService'

defineComponent({
  name: 'CreateApplication'
})

const receiver_facility = ref()
const nomenklature = ref()
const transport = ref()
const company = ref()
const nomenklature_amount = ref()

const router = useRouter()

useApplicationsStore().fetchFacilities()
useApplicationsStore().fetchNomenklatures()
useApplicationsStore().fetchTransports()
useApplicationsStore().fetchCompanies()

const facilities = computed(() => useApplicationsStore().facilities)
const nomenklatures = computed(() => useApplicationsStore().nomenklatures)
const transports = computed(() => useApplicationsStore().transports)
const companies = computed(() => useApplicationsStore().companies)

const validate = () => {
  if (!receiver_facility.value) {
    notifyError('Не выбран объект')
    return false
  }
  if (!nomenklature.value) {
    notifyError('Не выбран вид номенклатуры')
    return false
  }
  if (!transport.value) {
    notifyError('Не выбран транспорт')
    return false
  }
  if (!company.value) {
    notifyError('Не выбрана компания')
    return false
  }
  if (!nomenklature_amount.value) {
    notifyError('Не указано количество номенклатуры')
    return false
  }
  return true
}

const createApplication = async () => {
  if (!validate()) {
    return
  }

  const res = await useApplicationsStore().createApplication({
    receiver_facility: receiver_facility.value,
    nomenklature: nomenklature.value,
    transport: transport.value,
    nomenklature_amount: nomenklature_amount.value
  })

  if (res.status === 201) {
    notifySuccess('Заявка успешно создана')
    receiver_facility.value = null
    nomenklature.value = null
    transport.value = null
    nomenklature_amount.value = null

    router.push({ name: 'Ecologist' })
  } else {
    notifyError('Ошибка при создании заявки')
  }
}
</script>

<style>
.btn {
  margin-left: 1rem;
}
</style>
