export let required = (value) => {
    if (!value) return `Goal can't be empty`
    return undefined
}

export let maxLength = (value) => {
    if(value.length > 300) return `Max length is 300 symbols`
    return undefined
}