<template>
  <section class="page-center">
    <form @submit.prevent="login" class="card login-form">
      <h1 class="login-form__title">Вход</h1>
      <div class="form-group">
        <label for="email">Email</label>
        <InputText v-model="email" input-id="email" placeholder="Email" />
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <InputText v-model="password" input-id="password" placeholder="Пароль" type="password" />
      </div>

      <div class="form-group">
        <Button type="submit" label="Войти" />
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { useUserStore } from '@/stores/user'
import { notifySuccess, notifyError } from '@/services/toastService'

defineComponent({
  name: 'Login'
})

const email = ref('')
const password = ref('')

const router = useRouter()

const login = async () => {
  const res = await useUserStore().loginUser(email.value, password.value)
  console.log(res)

  if (res.status === 200) {
    notifySuccess('Вы успешно авторизовались')
    router.push('/')
  } else {
    notifyError('Неверный логин или пароль')
  }
}
</script>

<style>
.login-form {
  width: 400px;
  padding: 20px;
}

.login-form__title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
