import React from "react";
import styles from './item.module.css'

const Item = ({item, deleteItem, completeItem}) => {

    return (
        <div>
            <p className={`${styles.item} ${item.isCompleted && styles.itemCompleted}`}>{item.itemText}</p>
            <button onClick={() => { deleteItem(item.id) }}>Delete</button>
            <button onClick={() => { completeItem(item.id) }}>Complete</button>
        </div>
    )
}

export default Item