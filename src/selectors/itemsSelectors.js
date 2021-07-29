import {createSelector} from "reselect";

export const getItemsSelector = (state) => {
    return state.todo.items
}
export const getCompletedItemsSelector = createSelector(getItemsSelector,
    (items) => {
    return items.filter(i => i.isCompleted)
    })
export const getNotCompletedItemsSelector = createSelector(getItemsSelector,
    (items) => {
    return items.filter(i => !i.isCompleted)
    })