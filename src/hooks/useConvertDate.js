import { useGlobalState } from '../context'

export const useConvertDate = () => {
  const { location } = useGlobalState()
  const convert = (date, options) =>
    Intl.DateTimeFormat(location.lang, options).format(new Date(date * 1000))

  const convertDay = (date) => convert(date, { weekday: 'short' })
  const convertDate = (date) => convert(date, { year: 'numeric', month: 'short', day: 'numeric' })

  return { convertDay, convertDate }
}
