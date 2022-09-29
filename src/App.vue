<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Toast from 'primevue/toast'
import { useUserStore } from './stores/user'
import type { IUser } from './types'

defineComponent({
  name: 'App'
})

const user = computed<IUser>(() => useUserStore().getUser)
</script>

<template>
  <Toast />
  <header>
    <div class="wrapper">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="logo" />
      </div>
      <nav class="navbar">
        <RouterLink class="nav__item" to="/">Home</RouterLink>
        <RouterLink class="nav__item" to="/ecologist">Ecologist</RouterLink>
        <RouterLink class="nav__item" to="/facilities">Auditor</RouterLink>
        <span v-if="user" class="nav__item green">Привет, {{ user.first_name }}</span>
        <RouterLink v-else class="nav__item" to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
header {
  padding: 10px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__item {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.2s ease;
  font-size: 1.2rem;
  color: hsla(160, 100%, 37%, 1);
}

.nav__item.router-link-exact-active {
  color: #fff;
  background-color: hsla(160, 100%, 37%, 1);
}

.logo img {
  width: 100px;
  height: 100px;
}
</style>
