import * as types from './actionTypes'
import uuid from 'uuid'

// STEP-7 MAKE ACTION CREATORS THE COMPONENTS CAN USE DIRECTLY
export function increment() {
    return {
      type: types.INCREMENT,
    };
  }
  
  export function decrement() {
    return {
      type: types.DECREMENT,
    };
  }

export function changeInput({todoItem, todoValue}) {
return{
    type: types.INPUT_CHANGE,
    payload:{todoItem, todoValue}

    }
}


export function addTodo({item}) {
return {
    type: types.SUBMIT_TODO,
    payload:{
        item:"",
        completed:false,
        id:uuid(),
    }
}
}

export function markComplete(id) {
    return{
        type: types.TOGGLE_TODO_COMPLETE,
        payload:id
    }

}
