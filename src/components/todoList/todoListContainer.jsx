import TodoList from "./todoList";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {addItem, completeItem, deleteItem} from "../../redux/todoReducer";

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
        items: state.todo.items,
    }
}

export default compose(
    connect(mapStateToProps, {addItem, deleteItem, completeItem})
)(TodoListContainer)