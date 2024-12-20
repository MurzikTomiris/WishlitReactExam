import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import {Home} from "./UI/pages/Home"
import {Account} from "./UI/pages/Account"
import {Wishlist} from "./UI/pages/Wishlist"
import { Giftcards } from './UI/pages/Giftcards'

export const App = () => {
  return (
    <div>      
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/account/:id" element={<Account />} />
      <Route exact path="/giftcard/:wishlistId" element={<Giftcards />} />
      <Route exact path="/wishlist" element={<Wishlist />} />
    </Routes>     
    </div>
  )
}


export default App