export const useConvertDate = (lang = 'en') => {
  const convert = (date, options) =>
    Intl.DateTimeFormat(lang, options).format(new Date(date * 1000))

  const convertDay = (date) => convert(date, { weekday: 'short' })
  const convertDate = (date) => convert(date, { year: 'numeric', month: 'short', day: 'numeric' })

  return { convertDay, convertDate }
}
