import { ToastSeverity } from 'primevue/api'
import { app } from '@/main'
import type { ToastServiceMethods } from 'primevue/toastservice'

const lifeTime = 3000

export function notifyInfo(title: string = 'I am title', body: string = ''): void {
  const toast: ToastServiceMethods = app.config.globalProperties.$toast
  toast.add({ severity: ToastSeverity.INFO, summary: title, detail: body, life: lifeTime })
}

export function notifySuccess(title: string = 'I am title', body: string = ''): void {
  const toast: ToastServiceMethods = app.config.globalProperties.$toast
  toast.add({ severity: ToastSeverity.SUCCESS, summary: title, detail: body, life: lifeTime })
}

export function notifyError(title: string = 'I am title', body: string = ''): void {
  const toast: ToastServiceMethods = app.config.globalProperties.$toast
  toast.add({ severity: ToastSeverity.ERROR, summary: title, detail: body, life: lifeTime })
}
