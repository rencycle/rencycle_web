<template>
  <RouterView />
</template>
<script setup lang="ts">
import { defineComponent } from 'vue'

/**
 * Empty layout component
 * @description Empty layout (no header, no footer)
 */
defineComponent({
  name: 'Empty'
})
</script>
