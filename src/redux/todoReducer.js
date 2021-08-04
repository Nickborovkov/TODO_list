import {
    addNewItemToLocalStorage,
    completeSelectedItem,
    deleteItemFromLocalStorage,
    getItemsFromLocalStorage,
    getNewDate
} from "../helpers/localStorageHelpers";

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
            getItemsFromLocalStorage(newItemsArray)

            return {
                //Setting items to UI
                ...state,
                items: newItemsArray,
            }

        case ADD_ITEM:
            //Getting date when item was added
            const newDate = getNewDate()

            //Adding item to localStorage
            const itemsArray = [...state.items]
            addNewItemToLocalStorage(itemsArray, action, newDate)

            return {
                //Setting items to UI
                ...state,
                items: [...state.items, {id: itemsArray.length + 1,
                    itemText: action.itemText,
                    isCompleted :false,
                    currentDate: newDate
                }],
            }

        case DELETE_ITEM:
            let itemsDeleteArray = []
            deleteItemFromLocalStorage(itemsDeleteArray, action)

            return {
                //Setting items to UI
                ...state,
                items: itemsDeleteArray,
            }

        case COMPLETE_ITEM:
            //Getting items from localStorage and rewriting them with conditions
            let itemsCompleteArray = [...state.items]
            completeSelectedItem(itemsCompleteArray, action, state)

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

