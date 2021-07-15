import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

// actions
const ADD = "ADD";
const MINUS = "MINUS";

// reducer is a function that modifies your data
// whatever reducer returns, it will be the state of the application
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// store is where you save the data
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

// if you want listen for changes in your store
// you can subscribe that changes
countStore.subscribe(onChange);

const handleAdd = () => {
  // dispatch sends the message to modifier
  // action must be an object (mush have type)
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
