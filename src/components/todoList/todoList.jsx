import React, {useState} from "react";
import Item from "./item/Item";
import AddNewItem from "./addItemForm/addItemForm";
import styles from './todoList.module.css'

const TodoList = ({items, addItem, deleteItem, completeItem, completeAllItem}) => {

    let [filterType, setFilterType] = useState(`all`)
    let [whatToShow, setWhatToShow] = useState(`See`)

    let seeFilters = () => {
        whatToShow === `Hide`
            ? setWhatToShow(`See`)
            : setWhatToShow(`Hide`)
    }

        return <div className={styles.todoBody}>
            <h2 className={styles.title}>Plan for today:</h2>
            <AddNewItem addItem={addItem}
                        items={items}/>
            {
                items.length > 0 &&
                <div className={styles.filterSection}>
                    <button className={styles.filterButton} onClick={seeFilters}>
                        {whatToShow} filters
                    </button>

                    {
                        whatToShow === `Hide` &&
                        <div className={styles.filters}>
                            <button className={styles.filter} onClick={ () =>
                            {setFilterType(`all`)} } >All</button>
                            <button className={styles.filter} onClick={ () =>
                            {setFilterType(`done`)} } >Done</button>
                            <button className={styles.filter} onClick={ () =>
                            {setFilterType(`undone`)} } >Undone</button>
                        </div>
                    }
                </div>
            }
            <div>
                {
                    items.length === 0
                        ? <h3 className={styles.itemsReplace}>Add your daily goals here to
                            be shure you won't forget something </h3>
                        : <div className={styles.itemsList}>
                            {
                                items.map(i => <Item key={i.id}
                                                     item={i}
                                                     deleteItem={deleteItem}
                                                     completeItem={completeItem}
                                                     filterType={filterType}/>)
                            }
                        </div>
                }
            </div>
            {
                items.length > 0 &&
                <button className={styles.completeAll} onClick={completeAllItem}>Complete all</button>
            }

        </div>
}

export default TodoList