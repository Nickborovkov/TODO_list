import TodoList from "./todoList";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {addItem, completeAllItem, completeItem, deleteItem, getItems} from "../../redux/todoReducer";

class TodoListContainer extends React.Component{
    componentDidMount() {
        this.props.getItems()
    }

    render() {
        return <TodoList {...this.props}
                         addItem={this.props.addItem}
                         deleteItem={this.props.deleteItem}
                         completeItem={this.props.completeItem}
                         completeAllItem={this.props.completeAllItem}/>
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.todo.items,
    }
}

export default compose(
    connect(mapStateToProps, {getItems, addItem, deleteItem, completeItem, completeAllItem})
)(TodoListContainer)