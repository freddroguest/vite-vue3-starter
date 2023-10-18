import moment from 'moment'

export const dateToString = (date:Date) => {
    return moment(date).calendar()
}

export const dateDiff = (start_at:Date, end_at:Date) => {
    return moment.duration(moment(end_at).diff(start_at)).humanize()
}