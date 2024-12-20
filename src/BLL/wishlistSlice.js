import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    accountId: 1,
    name: "Tech Gadgets Wishlist",
    description: "All the latest and greatest tech I want to buy.",
    listLink: "/wishlists/1",
    image: "https://play-lh.googleusercontent.com/JFsWuM7yWlTxhoddyAA5eLAaS92hjJz5-hAa-82o8hMr2Kbeg8yDzIounvNSNCTYNg=w600-h300-pc0xffffff-pd",
  },
  {
    id: 2,
    accountId: 2,
    name: "Books Wishlist",
    description: "A collection of my must-read books.",
    listLink: "/wishlists/2",
    image: "https://play-lh.googleusercontent.com/JFsWuM7yWlTxhoddyAA5eLAaS92hjJz5-hAa-82o8hMr2Kbeg8yDzIounvNSNCTYNg=w600-h300-pc0xffffff-pd",
  },
];

const wishlistSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    createWishlist: (state, action) => {
      state.push(action.payload);
    },
    editWishlist: (state, action) => {
      const index = state.findIndex((w) => w.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    deleteWishlist: (state, action) => {
      return state.filter((w) => w.id !== action.payload);
    },
    shareWishlist: (_, action) => {
      navigator.clipboard.writeText(action.payload);
      alert("Ссылка на Wishlist скопирована");
    },
  },
});

export const { createWishlist, editWishlist, deleteWishlist, shareWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;