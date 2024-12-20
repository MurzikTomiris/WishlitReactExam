import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "User",
    email: "user@mail.com",
    login: "myuser",
    password: "123",
  },
  {
    id: 2,
    name: "User2",
    email: "user2@mail.com",
    login: "myuser2",
    password: "123",
  },
];

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    createAccount: (state, action) => {
      state.push(action.payload); 
    },
    viewAccount: (state, action) => {
      return state.find((account) => account.id === action.payload); 
    },
    editAccount: (state, action) => {
      const index = state.findIndex((account) => account.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload }; 
      }
    },
    deleteAccount: (state, action) => {
      return state.filter((account) => account.id !== action.payload); 
    },
  },
});

export const findAccountById = (state, id) => state.account.find((account) => account.id === id);

export const { createAccount, viewAccount, editAccount, deleteAccount } =
  accountSlice.actions;
export default accountSlice.reducer;