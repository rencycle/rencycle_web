<template>
  <div class="notfound">
    <h1>404</h1>
    <h2>Page not found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
    <router-link to="/">Go to home</router-link>
  </div>
</template>

<script lang="ts">
/**
 * NotFound page
 */
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound'
})
</script>
