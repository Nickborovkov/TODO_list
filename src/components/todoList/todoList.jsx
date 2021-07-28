import React from "react";
import Item from "./item/Item";
import AddNewItem from "./addItemForm/addItemForm";

const TodoList = ({items, isCompleted, addItem, deleteItem, completeItem}) => {
    return (
        <div>
            <h2>What should I do today?</h2>
            <AddNewItem addItem={addItem}/>
            <div>
                {
                    items.map(i => <Item key={i.id}
                                         item={i}
                                         isCompleted={isCompleted}
                                         deleteItem={deleteItem}
                                         completeItem={completeItem}/>)
                }
            </div>
        </div>
    )
}

export default TodoList