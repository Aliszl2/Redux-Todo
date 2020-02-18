import React, { useReducer } from "react";
import uuid from "uuid";
import { connect} from "react-redux"
import { changeInput, addTodo } from '../state/actionCreators';

const TodoForm = () => {
  // const onSubmit = event => {
  //   event.preventDefault();

  //   const newTodo = {
  //     id: uuid(),
  //     item: state.addTodo.item,
  //     completed: false
  //   };
  //   dispatch({ type: SUBMIT_TODO, payload: newTodo });
  // };

  // const onChange = event => {
  //   const todoItem = event.target.name;
  //   const todoValue = event.target.value;
  //   dispatch({
  //     type: INPUT_CHANGE,
  //     payload: { todoItem, todoValue }
  //   });
  // };
  return (
    <div>
      <div>
        <form 
        //onSubmit={onSubmit}
        >
          <input
            name="item"
            type="text"
            placeholder="Add todo"
            // onChange={onChange}
            // value={state.addTodo.item}
          />
          <button type="submit">Submit Todo</button>
        </form>
      </div>
      <button
        // onClick={event => {
        //   dispatch({ type: CLEAR_COMPLETE, payload: state.completed });
        // }}
      >
        Clear completed in todoform
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.formValues,
  };
}
// export default TodoForm;
export default connect(
  mapStateToProps, // injects props into Counter
  { changeInput, addTodo  }, // STEP 9 OF THE GENERAL STEPS (B)
)(TodoForm);
