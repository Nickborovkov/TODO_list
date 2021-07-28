const ADD_ITEM = `ADD_ITEM`
const DELETE_ITEM = `DELETE_ITEM`
const COMPLETE_ITEM = `COMPLETE_ITEM`


const initialState = {
    items: [
        {id: 1, itemText: `123123123`},
        {id: 2, itemText: `qqweasdqw`},
        {id: 3, itemText: `!@#$@!!@@`},
    ],
    isCompleted: [],
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
            return {
                ...state,
                isCompleted: [...state.isCompleted, action.itemId]
            }
        default:
            return state
    }
}

export default todoReducer


export const addItem = (itemText) => ( { type: ADD_ITEM, itemText } )

export const deleteItem = (itemId) => ( { type: DELETE_ITEM, itemId } )

export const completeItem = (itemId) => ( { type: COMPLETE_ITEM, itemId } )

