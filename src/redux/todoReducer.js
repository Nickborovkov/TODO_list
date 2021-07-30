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
                let resultString = localStorage.getItem(String(i))
                storageArray.push(
                    {id: JSON.parse(resultString)[0], itemText: JSON.parse(resultString)[1],
                        isCompleted: JSON.parse(resultString)[2],
                        currentDate: JSON.parse(resultString)[3]}
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
            return {
                ...state,
                items: [...state.items.filter(i => i.id !== action.itemId)],
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

