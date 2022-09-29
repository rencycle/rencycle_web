<template>
  <section>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" />
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
      <button type="submit">Register</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'

defineComponent({
  name: 'Register'
})

const email = ref('')
const password = ref('')

const register = () => {
  console.log(email.value, password.value)
}
</script>
