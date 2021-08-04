export let getItemsFromLocalStorage = (array) => {
    for (let i = 1; i <= localStorage.length; i++) {
        const resultString = JSON.parse(localStorage.getItem(String(i)))
        array.push(
            {
                id: resultString[0],
                itemText: resultString[1],
                isCompleted: resultString[2],
                currentDate: resultString[3]
            }
        )
    }
}


export const getNewDate = () => {
    //Getting date when item was added
    const months = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`]
    const days = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`]
    const now = new Date()

    //Formatting date
    const formatDate = (date) => {
        if (String(date).length <= 1) return `0${String(date)}`
        return String(date)
    }
    const currentHours = formatDate(now.getHours())
    const currentMinutes = formatDate(now.getMinutes())
    const currentSeconds = formatDate(now.getSeconds())

    //Setting date
    const newDate = `${now.getFullYear()} / ${months[now.getMonth()]} / ${days[now.getDay() - 1]} 
            / ${currentHours}:${currentMinutes}:${currentSeconds}`

    return newDate

}


export const addNewItemToLocalStorage = (array, action, newDate) => {
    //Setting new item to localStorage
    localStorage.setItem(`${array.length + 1}`,
        JSON.stringify(
            [array.length + 1,
                action.itemText,
                false,
                newDate])
    )
}


export const deleteItemFromLocalStorage = (array, action) => {
    //Getting items from localStorage
    for (let i = 1; i <= localStorage.length; i++) {
        const resultString = JSON.parse(localStorage.getItem(String(i)))
        if (resultString[0] !== action.itemId) {
            array.push({
                id: array.length + 1,
                itemText: resultString[1],
                isCompleted: resultString[2],
                currentDate: resultString[3]
            })
        }
    }
    //Clearing localStorage
    localStorage.clear()
    //Setting items again (this is needed for correct items id)
    for (let i = 0; i <= array.length - 1; i++) {
        localStorage.setItem(`${array[i].id}`,
            JSON.stringify([array[i].id,
                array[i].itemText,
                array[i].isCompleted,
                array[i].currentDate]))
    }
}


export const completeSelectedItem = (array, action, state) => {
    //Getting items from localStorage and rewriting them with conditions
    for (let i = 1; i <= localStorage.length; i++){
        const resultString = JSON.parse(localStorage.getItem(String(i)))
        if(resultString[0] === action.itemId){
            if(resultString[2] === false){
                localStorage.setItem(`${resultString[0]}`,
                    JSON.stringify(
                        [resultString[0],
                            resultString[1],
                            true,
                            resultString[3]])
                )
            } else if(resultString[2] === true){
                localStorage.setItem(`${resultString[0]}`,
                    JSON.stringify(
                        [resultString[0],
                            resultString[1],
                            false,
                            resultString[3]])
                )
            }
        }
    }
    for (let i = 0; i <= state.items.length - 1; i++) {
        if(array[i].id === action.itemId){
            array[i].isCompleted = true
                ? array[i].isCompleted === false
                : array[i].isCompleted === true
        }
    }
}