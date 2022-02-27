import dayjs from 'dayjs'

export const formatDay =  (date) => {
  return dayjs(date).format("YYYY-MM-DD")
}
