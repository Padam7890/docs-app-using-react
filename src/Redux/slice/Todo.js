import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  list: [
    {
      id: 0,
      data: {
        desc: "hi",
        low: true,
        medium: false,
        high: false,
      },
    },
  ],
};



export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        data: action.payload,
      };
      state.list.push(todo);
    },

    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    orderDESC: (state, action) => {
      state.list = state.list.sort((a, b) => {
        if (b.data.high && !a.data.high) {
          return 1;
        } else if (!b.data.high && a.data.high) {
          return -1;
        }

        if (b.data.medium && !a.data.medium) {
          return 1;
        } else if (!b.data.medium && a.data.medium) {
          return -1;
        }

        if (b.data.low && !a.data.low) {
          return 1;
        } else if (!b.data.low && a.data.low) {
          return -1;
        }

        return 0;
      });
    },
    deleteAll:(state,action)=>{
      state.list=[];
    },
    search:(state,action)=>{
      state.list=state.list.filter((todo)=>{
        return todo.data.desc.toLowerCase().includes(action.payload.toLowerCase())
      })
    }
  },
});

export const { addTodo, removeTodo,orderDESC, updateTodo,deleteAll ,search} = todoSlice.actions;
export default todoSlice.reducer;

// Middleware to save state in local storage after each action
export const saveToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("todoState", JSON.stringify(store.getState()));
  return result;
};
