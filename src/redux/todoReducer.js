const ADD_ITEM = `ADD_ITEM`
const DELETE_ITEM = `DELETE_ITEM`
const COMPLETE_ITEM = `COMPLETE_ITEM`


const initialState = {
    items: [
        {id: 1, itemText: `123123123`, isCompleted: false},
        {id: 2, itemText: `qqweasdqw`, isCompleted: true},
        {id: 3, itemText: `!@#$@!!@@`, isCompleted: false},
        {id: 4, itemText: `123123123`, isCompleted: true},
        {id: 5, itemText: `qqweasdqw`, isCompleted: false},
        {id: 6, itemText: `!@#$@!!@@`, isCompleted: true},
    ],
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
            debugger
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

