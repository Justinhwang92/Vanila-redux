import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// console.log(addTodo(), deleteTodo());

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       // console.log(action);
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() }); // mutating the state
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload), // returning the new state
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
