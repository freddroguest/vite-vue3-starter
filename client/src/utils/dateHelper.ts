import moment from 'moment'

export const dateToString = (date:Date) => {
    if(date)
        return moment(date).calendar()

    return '-'     
}

export const dateDiff = (start_at:Date, end_at:Date) => {
    if(start_at && end_at)
        return moment.duration(moment(end_at).diff(start_at)).humanize()
    return '-'
}