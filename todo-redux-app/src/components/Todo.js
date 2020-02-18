import React from "react";
import { TOGGLE_TODO_COMPLETE } from "../reducers/reducer";
import { REMOVE_TODO } from "../reducers/reducer";
import "./Todo.css";
// { todo, state, dispatch }
const Todo = () => {
  return (
    <div className={todo.completed ? "completed" : "notCompleted"}>
      <div className="todo">
        <ul>{todo.item}</ul>
        <button
          onClick={event => {
            dispatch({ type: TOGGLE_TODO_COMPLETE, payload: todo.id });
          }}
          type="submit"
        >
          Complete
        </button>
        <button
             onClick={event => {
              dispatch({ type: REMOVE_TODO, payload: todo.id });
            }}
            >x</button>
      </div>
    </div>
  );
};

export default Todo;
