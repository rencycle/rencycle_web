<template>
  <section class="facilities">
    <h1>Facilities</h1>
    <div class="facilities__list">
      <router-link
        v-for="facility in facilities"
        class="facilities__item"
        :key="facility.id"
        :to="`/facilities/auditor/${facility.id}`"
      >
        <div class="">{{ facility.name }}</div>
        <img
          class="facilities__image"
          src="https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          :alt="facility.name"
        />
        <div class="facilities-address ghost-text">{{ facility.address }}</div>
      </router-link>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useApplicationsStore } from '@/stores/applications'
import { computed } from 'vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'Facilities'
})

useApplicationsStore().fetchFacilities()
const facilities = computed(() => useApplicationsStore().facilities)
</script>

<style>
.facilities {
  padding: 20px;
}
.facilities__list {
  display: flex;
  flex-wrap: wrap;
}
.facilities__item {
  width: 200px;
  min-height: 200px;
  background-color: #f8f9fd;
  margin: 10px;
  border-radius: 0.5rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.facilities__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}
.facilities-address {
  font-size: 0.8rem;
  margin-top: 2rem;
}
.ghost-text {
  color: #333;
}
</style>
