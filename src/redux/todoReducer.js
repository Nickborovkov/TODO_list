const ADD_ITEM = `todo/ADD_ITEM`
const DELETE_ITEM = `todo/DELETE_ITEM`
const COMPLETE_ITEM = `todo/COMPLETE_ITEM`


const initialState = {
    items: [],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, {id: state.items.length + 1,
                    itemText: action.itemText,
                    isCompleted :false}]
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: [...state.items.filter(i => i.id !== action.itemId)]
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


export const addItem = (itemText) => ( { type: ADD_ITEM, itemText } )

export const deleteItem = (itemId) => ( { type: DELETE_ITEM, itemId } )

export const completeItem = (itemId) => ( { type: COMPLETE_ITEM, itemId } )

