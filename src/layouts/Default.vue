<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/ecologist">Ecologist</RouterLink>
        <RouterLink to="/auditor">Auditor</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<script setup lang="ts">
import { defineComponent } from 'vue'

/**
 * Default layout component
 * @description Default layout
 */
defineComponent({
  name: 'Default'
})
</script>
