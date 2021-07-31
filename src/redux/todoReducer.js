const GET_ITEMS = `todo/GET_ITEMS`
const ADD_ITEM = `todo/ADD_ITEM`
const DELETE_ITEM = `todo/DELETE_ITEM`
const COMPLETE_ITEM = `todo/COMPLETE_ITEM`


const initialState = {
    items: [],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            let storageArray = [...state.items]
            for (let i = 1; i <= localStorage.length; i ++){
                let resultString = JSON.parse(localStorage.getItem(String(i)))
                storageArray.push(
                    {id: resultString[0], itemText: resultString[1],
                        isCompleted: resultString[2],  currentDate: resultString[3]}
                )
            }
            return {
                ...state,
                items: storageArray
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, {id: state.items.length + 1,
                    itemText: action.itemText,
                    isCompleted :false,
                    currentDate: action.currentDate
                }],
            }
        case DELETE_ITEM:
            let newResultArray = []
            for (let i = 1; i <= localStorage.length; i++){
                let resultString = JSON.parse(localStorage.getItem(String(i)))
                if(resultString[0] !== action.itemId){
                    newResultArray.push({id: newResultArray.length + 1, itemText: resultString[1],
                        isCompleted: resultString[2],  currentDate: resultString[3]})
                                    }
            }
            localStorage.clear()
            for (let i = 0; i <= newResultArray.length - 1; i++){
                localStorage.setItem(`${newResultArray[i].id}`, JSON.stringify([newResultArray[i].id, newResultArray[i].itemText, newResultArray[i].isCompleted, newResultArray[i].currentDate]))
            }
            return {
                ...state,
                items: newResultArray,
            }
        case COMPLETE_ITEM:
            let itemsArray = [...state.items]
            for (let i = 0; i <= state.items.length - 1; i++) {
                if(itemsArray[i].id === action.itemId){
                    itemsArray[i].isCompleted = true
                        ? itemsArray[i].isCompleted === false
                        : itemsArray[i].isCompleted === true
                }
            }
            return {
                ...state,
                items: [...state.items]
            }
        default:
            return state
    }
}

export default todoReducer

export const getItems = () => ( { type: GET_ITEMS } )

export const addItem = (itemText, currentDate) => ( { type: ADD_ITEM, itemText, currentDate} )

export const deleteItem = (itemId) => ( { type: DELETE_ITEM, itemId } )

export const completeItem = (itemId) => ( { type: COMPLETE_ITEM, itemId } )

