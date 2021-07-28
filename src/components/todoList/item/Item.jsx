import React from "react";
import styles from './item.module.css'

const Item = ({item, isCompleted, deleteItem, completeItem}) => {

    return (
        <div>
            <p className={`${styles.item} ${isCompleted && styles.itemCompleted}`}>{item.itemText}</p>
            <p>{item.id}</p>

            <button onClick={() => { deleteItem(item.id) }}>Delete</button>
            <button onClick={() => { completeItem(item.id) }}>Complete</button>


        </div>
    )
}

export default Item