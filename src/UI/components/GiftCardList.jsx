import React from "react";
import GiftCard from "./GiftCard";

const GiftCardList = ({ cards }) => {
  return (
    <div className="giftcard-list">
      {cards.map((card) => (
        <GiftCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default GiftCardList;
