const GET_ITEMS = `todo/GET_ITEMS`
const ADD_ITEM = `todo/ADD_ITEM`
const DELETE_ITEM = `todo/DELETE_ITEM`
const COMPLETE_ITEM = `todo/COMPLETE_ITEM`
const COMPLETE_ALL_ITEMS = `todo/COMPLETE_ALL_ITEMS`


const initialState = {
    items: [],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            //Getting items from localStorage
            const newItemsArray = []
            for (let i = 1; i <= localStorage.length; i ++){
                const resultString = JSON.parse(localStorage.getItem(String(i)))
                newItemsArray.push(
                    {id: resultString[0],
                        itemText: resultString[1],
                        isCompleted: resultString[2],
                        currentDate: resultString[3]}
                )
            }
            return {
                //Setting items to UI
                ...state,
                items: newItemsArray
            }
        case ADD_ITEM:
            const itemsArray = [...state.items]
            //Getting date when item was added
            const months = [`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`]
            const days = [`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`]
            const now = new Date()
            const newDate = `${months[now.getMonth()]} ${days[now.getDay()]} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
            //Setting new item to localStorage
            localStorage.setItem(`${itemsArray.length + 1}`,
                JSON.stringify(
                    [itemsArray.length + 1,
                    action.itemText,
                    false,
                    newDate])
                )
            return {
                //Adding items to UI
                ...state,
                items: [...state.items, {id: itemsArray.length + 1,
                    itemText: action.itemText,
                    isCompleted :false,
                    currentDate: newDate
                }],
            }
        case DELETE_ITEM:
            let itemsDeleteArray = []
            //Getting items from localStorage
            for (let i = 1; i <= localStorage.length; i++){
                const resultString = JSON.parse(localStorage.getItem(String(i)))
                if(resultString[0] !== action.itemId){
                    itemsDeleteArray.push({id: itemsDeleteArray.length + 1,
                        itemText: resultString[1],
                        isCompleted: resultString[2],
                        currentDate: resultString[3]})
                }
            }
            //Clearing localStorage
            localStorage.clear()
            //Setting items again (this is needed for correct items id)
            for (let i = 0; i <= itemsDeleteArray.length - 1; i++){
                localStorage.setItem(`${itemsDeleteArray[i].id}`,
                    JSON.stringify([itemsDeleteArray[i].id,
                        itemsDeleteArray[i].itemText,
                        itemsDeleteArray[i].isCompleted,
                        itemsDeleteArray[i].currentDate]))
            }
            return {
                //Setting items to UI
                ...state,
                items: itemsDeleteArray,
            }
        case COMPLETE_ITEM:
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
            let itemsCompleteArray = [...state.items]
            for (let i = 0; i <= state.items.length - 1; i++) {
                if(itemsCompleteArray[i].id === action.itemId){
                    itemsCompleteArray[i].isCompleted = true
                        ? itemsCompleteArray[i].isCompleted === false
                        : itemsCompleteArray[i].isCompleted === true
                }
            }
            return {
                //Setting items to UI
                ...state,
                items: [...state.items]
            }
        case COMPLETE_ALL_ITEMS:
            //Clearing localStorage
            localStorage.clear()
            return {
                //Setting items to UI
                ...state,
                items: []
            }
        default:
            return state
    }
}

export default todoReducer


//Action creators
export const getItems = () =>
    ( { type: GET_ITEMS } )

export const addItem = (itemText) =>
    ( { type: ADD_ITEM, itemText} )

export const deleteItem = (itemId) =>
    ( { type: DELETE_ITEM, itemId } )

export const completeItem = (itemId) =>
    ( { type: COMPLETE_ITEM, itemId } )

export const completeAllItem = () =>
    ( { type: COMPLETE_ALL_ITEMS } )

