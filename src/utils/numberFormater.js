export const numberFormater = (number) => {
    return new Intl.NumberFormat('en', { notation: "compact" }).format(number)
}