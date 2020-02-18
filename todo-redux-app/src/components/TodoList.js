import React from "react";
import Todo from "../components/Todo";
import { CLEAR_COMPLETE } from "../reducers/reducer";

const TodoList = ({ state, dispatch }) => {
  return (
    <div>
      <button
        onClick={event => {
          dispatch({ type: CLEAR_COMPLETE, payload: state.todoList.completed });
        }}
      >
        Clear completed in todolist
      </button>
      <div>
        {state.todoList.map(todo => {
          return (
            <Todo key={todo.id} todo={todo} state={state} dispatch={dispatch} />
          );
        })}
      </div>
    </div>
  );
};
export default TodoList;
