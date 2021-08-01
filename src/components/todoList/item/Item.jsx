import React from "react";
import styles from './item.module.css'
import cn from 'classnames'
import { AiFillDelete } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const Item = ({item, deleteItem, completeItem, filterType}) => {

    return (
        // Filters show chosen elements with adding/deleting needed css style
        <div className={cn(styles.itemBody,
                            filterType === `done` && !item.isCompleted && styles.itemDone,
                           filterType === `undone` && item.isCompleted && styles.itemDone)
        }>
            <div className={cn(styles.item, item.isCompleted && styles.itemCompleted)}>
                <p className={styles.itemTime}>{item.currentDate}</p>
                <p className={styles.itemInner}>{item.itemText}</p>
            </div>


            <div className={styles.buttonHolder}>
                <button className={cn(styles.button, item.isCompleted && styles.buttonCancel)}
                        onClick={() => { completeItem(item.id) }}>
                    {item.isCompleted ? <AiOutlineClose/> : <AiOutlineCheck/>}
                </button>
                <button className={styles.button}
                        onClick={ () => {
                            deleteItem(item.id)
                        }}>
                    <AiFillDelete/>
                </button>
            </div>

        </div>
    )
}

export default Item




