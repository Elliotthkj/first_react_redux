import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ text: action.payload });
    },
    removeTodo: (state, action) => {
      const { payload: text } = action;
      return state.items.filter((item) => {
        return item.text === text;
      });
    },
    clearList: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeTodo, clearList } = todoSlice.actions;

export default todoSlice.reducer;
