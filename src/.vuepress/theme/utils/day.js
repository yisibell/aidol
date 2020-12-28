import dayjs from 'dayjs'

export const formatDay =  (date) => {
  return dayjs(date).format("Y-MM-DD")
}
