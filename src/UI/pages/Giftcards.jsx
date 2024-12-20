import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GiftCardList from "../components/GiftCardList";

import "../style/wishlist.css"

export const Giftcards = () => {
  const { wishlistId } = useParams();
  console.log(wishlistId);
  const cards = useSelector((state) =>
    state.giftcards.filter((card) => card.wishlistId === parseInt(wishlistId))
  );

  if (!cards.length) {
    return <p>Не найден Wishlist</p>;
  }

  return (
    <div className="giftcards-page">
      <h1>Ваш Wishlist</h1>
      <GiftCardList cards={cards} />
    </div>
  );
}


