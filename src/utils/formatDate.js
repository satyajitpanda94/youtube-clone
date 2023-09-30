export const formatDate = (date) => {
    const oneMinute = 60 * 1000
    const oneHour = 60 * oneMinute
    const oneDay = 24 * oneHour
    const oneWeek = 7 * oneDay
    const oneMonth = 31 * oneDay
    const oneYear = 365 * oneDay

    const RelativeTimeFormat = new Intl.RelativeTimeFormat('en');

    const presentDate = new Date()
    const publishedDate = new Date(date)

    const difference = (presentDate - publishedDate)
    
    if (difference < oneHour) {
        const minDiff = Math.floor(difference / oneMinute);
        return RelativeTimeFormat.format(minDiff * -1, 'minute')
    }

    if (difference < oneDay) {
        const hrDiff = Math.floor(difference / oneHour);
        return RelativeTimeFormat.format(hrDiff * -1, 'hour')
    }

    if (difference < oneDay*14) {
        const dayDiff = Math.floor(difference / oneDay);
        return RelativeTimeFormat.format(dayDiff * -1, 'day')
    }

    if (difference < oneMonth) {
        const wkDiff = Math.floor(difference / oneWeek);
        return RelativeTimeFormat.format(wkDiff * -1, 'week')
    }

    if (difference < oneYear) {
        const monthDiff = Math.floor(difference / oneMonth);
        return RelativeTimeFormat.format(monthDiff * -1, 'month')
    }

    const yearDiff = Math.floor(difference / oneYear);
    return RelativeTimeFormat.format(yearDiff * -1, 'year')
}

