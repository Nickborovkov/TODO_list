import TodoList from "./todoList";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {addItem, completeItem, deleteItem} from "../../redux/todoReducer";
import {getItemsSelector} from "../../selectors/itemsSelectors";

class TodoListContainer extends React.Component{
    render() {
        return <TodoList {...this.props}
                         addItem={this.props.addItem}
                         deleteItem={this.props.deleteItem}
                         completeItem={this.props.completeItem}/>
    }
}

const mapStateToProps = (state) => {
    return {
        items: getItemsSelector(state),
    }
}

export default compose(
    connect(mapStateToProps, {addItem, deleteItem, completeItem})
)(TodoListContainer)