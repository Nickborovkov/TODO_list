import React from "react";
import styles from './item.module.css'
import media from './itemMedia.module.css'
import cn from 'classnames'
import { AiFillDelete } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import {useDispatch} from "react-redux";
import {completeItem, deleteItem} from "../../../redux/todoReducer";

const Item = ({item, filterType}) => {

    const dispatch = useDispatch()

    const arrayForFilter = [styles.itemDone, media.itemDone]

    return (
        // Filters show chosen elements with adding/deleting needed css style
        <div className={cn(styles.itemBody, media.itemBody,
                            filterType === `done` && !item.isCompleted && arrayForFilter,
                           filterType === `undone` && item.isCompleted && arrayForFilter)
        }>
            <div className={cn(styles.item, media.item, item.isCompleted &&
                styles.itemCompleted)}>
                <p className={styles.itemTime}>{item.currentDate}</p>
                <p className={styles.itemInner}>{item.itemText}</p>
            </div>


            <div className={cn(styles.buttonHolder, media.buttonHolder)}>
                <button className={cn(styles.button, media.button, item.isCompleted &&
                    styles.buttonCancel)}
                        onClick={() => { dispatch(completeItem(item.id)) }}>
                    {item.isCompleted
                        ? <AiOutlineClose/>
                        : <AiOutlineCheck/>}
                </button>
                <button className={cn(styles.button, media.button)}
                        onClick={ () => {
                            dispatch(deleteItem(item.id))
                        }}>
                    <AiFillDelete/>
                </button>
            </div>

        </div>
    )
}

export default Item




