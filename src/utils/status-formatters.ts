import { EApplicationStatus } from '@/types'
export const formatApplicationStatus = (status: EApplicationStatus) => {
  switch (status) {
    case EApplicationStatus.PENDING:
      return 'В обработке'
    case EApplicationStatus.TECH_ACCEPTED:
      return 'Принято'
    case EApplicationStatus.TECH_REJECTED:
      return 'Отклонено'
    case EApplicationStatus.DRIVER_RECEIVED:
      return 'В пути'
    case EApplicationStatus.DRIVER_REJECTED:
      return 'Отклонено'
    case EApplicationStatus.RECYCLER_PLACED:
      return 'Принято'
    case EApplicationStatus.RECYCLER_PROCESSED:
      return 'Обработано'
    default:
      return 'Неизвестно'
  }
}
