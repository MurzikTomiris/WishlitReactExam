import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    wishlistId: 1,
    title: "Smartphone",
    description: "A new generation smartphone.",
    price: "$999",
    link: "https://example.com/smartphone",
    image: "https://play-lh.googleusercontent.com/JFsWuM7yWlTxhoddyAA5eLAaS92hjJz5-hAa-82o8hMr2Kbeg8yDzIounvNSNCTYNg=w600-h300-pc0xffffff-pd",
    isReserved: false,
  },
  {
    id: 2,
    wishlistId: 1,
    title: "Laptop",
    description: "High performance laptop.",
    price: "$1499",
    link: "https://example.com/laptop",
    image: "https://play-lh.googleusercontent.com/JFsWuM7yWlTxhoddyAA5eLAaS92hjJz5-hAa-82o8hMr2Kbeg8yDzIounvNSNCTYNg=w600-h300-pc0xffffff-pd",
    isReserved: true,
  },
  {
    id: 3,
    wishlistId: 2,
    title: "Book",
    description: "A must-read book.",
    price: "$19.99",
    link: "https://example.com/book",
    image: "https://via.placeholder.com/150",
    isReserved: false,
  },
];

const giftcardSlice = createSlice({
  name: "giftcards",
  initialState,
  reducers: {
    createGiftCard: (state, action) => {
      state.push(action.payload);
    },
    editGiftCard: (state, action) => {
      const index = state.findIndex((g) => g.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    deleteGiftCard: (state, action) => {
      return state.filter((g) => g.id !== action.payload);
    },
    toggleReservation: (state, action) => {
      const index = state.findIndex((g) => g.id === action.payload);
      if (index !== -1) {
        state[index].isReserved = !state[index].isReserved;
      }
    },
  },
});

export const { createGiftCard, editGiftCard, deleteGiftCard, toggleReservation } =
  giftcardSlice.actions;
export default giftcardSlice.reducer;