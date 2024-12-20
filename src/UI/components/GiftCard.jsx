import React from "react";
import { useDispatch } from "react-redux";
import { toggleReservation, deleteGiftCard } from "../../BLL/giftcardSlice";

import "../style/wishlist.css"

const GiftCard = ({ card }) => {
  const dispatch = useDispatch();

  return (
    <div className="gift-card">
      <img src={card.image} alt={card.title} />
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <p>Price: {card.price}</p>
      <a href={card.link} target="_blank" rel="noopener noreferrer">Ссылка</a>
      {card.isReserved && <div className="reserved-badge">Зарезервировано</div>}
      <div className="actions">
        <button onClick={() => dispatch(toggleReservation(card.id))}>
          {card.isReserved ? "Убрать резерв" : "Зарезервировать"}
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
