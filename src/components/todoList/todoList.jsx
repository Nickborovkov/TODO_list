import React from "react";
import Item from "./item/Item";
import AddNewItem from "./addItemForm/addItemForm";

const TodoList = ({items, addItem, deleteItem, completeItem}) => {
    return <div>
            <h2>What should I do today?</h2>
            <AddNewItem addItem={addItem}/>
            <button>Show only completed</button>
            <button>Show only not completed</button>
            <div>
                {
                    items.map(i => <Item key={i.id}
                                         item={i}
                                         deleteItem={deleteItem}
                                         completeItem={completeItem}/>)
                }
            </div>
        </div>
}

export default TodoList