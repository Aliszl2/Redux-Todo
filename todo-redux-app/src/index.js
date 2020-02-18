import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { combineReducers, createStore }from "redux"
import { countReducer, formReducer, todosReducer } from "./state/reducers"
import { Provider} from "react-redux"
// import { combineReducers, createStore }from "redux"
// import { countReducer, formReducer, todosReducer } from "./state/reducers"
// import { Provider} from "react-redux"
// import Counter from './components/Counter';

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
const combinedReducer = combineReducers({
    count: countReducer,
    formValues: formReducer,
    todoList: todosReducer,
})

const store = createStore(
    combinedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
)

ReactDOM.render(
<Provider store={store}>
<App combinedReducer={combinedReducer}/>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
