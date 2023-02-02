export const reformatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-En', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
