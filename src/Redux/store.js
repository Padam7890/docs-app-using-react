// store.js

import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import todoReducer, { saveToLocalStorage } from '../Redux/slice/Todo';

// Load state from local storage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("todoState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from local storage:", error);
    return undefined;
  }
};



const store = configureStore({
  reducer: {
    todoReducer
  },
  preloadedState: loadFromLocalStorage(),

  middleware: () => [thunk],
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(saveToLocalStorage),

});

// Dispatch the action to initialize from localStorage

export default store;
