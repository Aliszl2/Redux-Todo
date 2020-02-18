import * as types from './actionTypes'

// export const initialState = {
//     addTodo: {
//       item: ""
//     },
//     todoList: [
//       { item: "Paint shed", completed: false, id: 1 },
//       { item: "clean kitchen", completed: false, id: 2 },
//       { item: "wash dishes", completed: false, id: 3 },
//       { item: "Laundry", completed: false, id: 4 },
//       { item: "Mow Lawn", completed: false, id: 5 },
//       { item: "Make beds", completed: false, id: 6 },
//       { item: "Mop floors", completed: false, id: 7 }
//     ]
//   };

// STEP-3 CREATE ONE REDUCER FUNCTION PER SLICE OF STATE
const initialStateForm = {
        addTodo: {
          item: ""
        }}

        const initialCount = 0;
        export function countReducer(count = initialCount, action) {
          switch (action.type) {
            case types.INCREMENT:
              return count + 1;
            case types.DECREMENT:
              return count - 1;
            default:
              return count;
          }
        }
export function formReducer(state = initialStateForm, action){
 
    switch (action.type) {
        case types.INPUT_CHANGE:
            const { todoItem, todoValue } = action.payload;
            return state.concat(action.payload)
                // ...state,
                // addTodo:{
                //   ...state.addTodo,
                //   [todoItem]: todoValue}
            
        default:
            return state
}

}

const initialStateTodoList = []
export function todosReducer(state= initialStateTodoList, action) {
switch (action.type) {
    case types.SUBMIT_TODO:
        const newTodo = action.payload;
        return {
            ...state,
            todoList: [...state.todoList, newTodo],
            //clear form
            // addTodo: { item: "" }
          };
        
      
        default:
            return state
}
}
