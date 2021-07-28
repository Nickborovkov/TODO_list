import './App.css';
import React from "react";
import TodoListContainer from "./components/todoList/todoListContainer";

const App = () => {
  return (
      <div className='appWrapper'>
        <TodoListContainer />
      </div>
  )
}

export default App;
