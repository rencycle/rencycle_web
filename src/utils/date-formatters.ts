/**
 * Использовать данный файл, если данные функции не нужны в других местах. На данный момент не используется.
 */

/**
 * Formats a date to YYYY-MM-DD
 * @param date - Date to format
 * @returns - Formatted date
 */
export const formatDate = (date: string | undefined) => {
  return new Date(date!).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Formats a date to YYYY-MM-DD short
 * @param date - Date to format
 * @returns  - Formatted date
 */
export const formatDateShort = (date: string | undefined) => {
  const dateObject = new Date(date!)
  const year = dateObject.toLocaleString('default', { year: 'numeric' })
  const month = dateObject.toLocaleString('default', { month: '2-digit' })
  const day = dateObject.toLocaleString('default', { day: '2-digit' })

  return year + '-' + month + '-' + day
}

/**
 * Formats a date to YYYY-MM-DD HH:MM
 * @param date - DateTime to format
 * @returns - Formatted datetime
 */
export const formatDateTime = (date: string | undefined) => {
  const d = new Date(date!)
  return `${d.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })}`
}

/**
 * Formats a date to YYYY-MM-DDTHH:MM
 * @param date - Date to format
 * @param time - Time to format
 * @returns - Formatted date
 *  @example mergeDateTime('2020-01-01', '00:00') => '2020-01-01T00:00'
 * */
export const mergeDateTime = (date: string, time: string) => {
  const [year, month, day] = date.split('-')
  const [hour, minute] = time.split(':')

  return `${year}-${month}-${day}T${hour}:${minute}`
}

// !test
/**
 * Get month name from date
 * @param date - Date to format
 * @returns
 */
export const monthNameFromDate = (date: string) => {
  const [, month] = date.split('-')
  return new Date(Number(month), 1).toLocaleString('ru-RU', { month: 'long' })
}

// !test
/**
 * Get week day from date
 * @param date - Date to format
 * @returns
 */
export const dayNameFromDate = (date: string) => {
  const [, , day] = date.split('-')
  return new Date(Number(day), 1).toLocaleString('ru-RU', { weekday: 'long' })
}
