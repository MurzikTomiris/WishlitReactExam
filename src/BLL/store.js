import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./wishlistSlice";
import accountSlice from "./accountSlice";
import giftcardReducer from "./giftcardSlice";

export const store = configureStore({
  reducer: {
    wishlists: wishlistSlice,
    account: accountSlice,
    giftcards: giftcardReducer,
  },
});