import React, {useEffect, useState} from "react";
import Item from "./item/Item";
import AddNewItem from "./addItemForm/addItemForm";
import styles from './todoList.module.css'
import media from './todoListMedia.module.css'
import cn from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {completeAllItem, getItems} from "../../redux/todoReducer";

const TodoList = () => {

    const items = useSelector(state => state.todo.items)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getItems())
    },[])

    //Setting visibility of filters button
    const [filtersVisible, setFiltersVisible] = useState(false)
    const showFilters = () => {
        setFiltersVisible(true)
    }
    const hideFilters = () => {
        setFiltersVisible(false)
    }

    //Setting filter type for items
    const [filterType, setFilterType] = useState(`all`)
    const seeAllItems = () => {
        setFilterType(`all`)
        hideFilters()
    }
    const seeDoneItems = () => {
        setFilterType(`done`)
        hideFilters()
    }
    const seeUndoneItems = () => {
        setFilterType(`undone`)
        hideFilters()
    }


        return <div className={cn(styles.todoBody, media.todoBody)}>
            <h2 className={cn(styles.title, media.title)}>Plan for today:</h2>
            <AddNewItem/>

            {/*Button shows only when filtersVisible = false and items array exists*/}
            {
                items.length > 0 && !filtersVisible &&
                <button className={cn(styles.filterButton, media.filterButton)}
                        onClick={showFilters}>Filters</button>
            }

            {/*Filters show only when filtersVisible = true and items array exists*/}
            {
                items.length > 0 && filtersVisible &&
                <div className={cn(styles.filters, media.filters)}>
                    <button className={cn(styles.filter, media.filter)}
                            onClick={seeAllItems} >All</button>
                    <button className={cn(styles.filter, media.filter)}
                            onClick={seeDoneItems} >Done</button>
                    <button className={cn(styles.filter, media.filter)}
                            onClick={seeUndoneItems} >Undone</button>
                </div>
            }

            {/*Items array shows only when exists*/}
            {
                items.length === 0
                    ? <h3 className={cn(styles.itemsReplace, media.itemsReplace)}>Add your daily goals here to
                        be shure you won't forget something </h3>
                    : <div className={cn(styles.itemsList, media.itemsList)}>
                        {
                            items.map(i => <Item key={i.id}
                                                 item={i}
                                                 filterType={filterType}/>)
                        }
                    </div>
            }


            {/*CompleteAll button show only items array exists*/}
            {
                items.length > 0 &&
                <button className={cn(styles.completeAll, media.completeAll)}
                        onClick={ () => {dispatch(completeAllItem())} }>Complete all</button>
            }

        </div>
}

export default TodoList