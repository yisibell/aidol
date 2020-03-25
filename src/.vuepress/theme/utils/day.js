import moment from 'moment'

export const formatDay =  (date) => {
  return moment(date).format("Y-MM-DD")
}
