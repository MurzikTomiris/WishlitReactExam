import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteWishlist, shareWishlist, editWishlist } from "../../BLL/wishlistSlice";

import "../style/wishlist.css"

const WishlistCard = ({ wishlist }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ ...wishlist });

  const handleNavigate = () => {
    const wishlistId = wishlist.id;
    console.log("wishlistId:", wishlistId);
    navigate(`/giftcard/${wishlistId}`);
  };

  const handleShare = () => {
    dispatch(shareWishlist(`${window.location.origin}${wishlist.listLink}`));
  };

  const handleEdit = () => {
    dispatch(editWishlist(formData));
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="wishlist-card" onClick={handleNavigate} style={{ cursor: "pointer" }}>
      <img src={wishlist.image} alt={wishlist.name} />
      <h3>{wishlist.name}</h3>
      <p>{wishlist.description}</p>
      <div className="wishlist-actions">
        <button onClick={handleShare}>Поделиться</button>
        <button onClick={() => setIsModalOpen(true)}>Редактировать</button>
        <button onClick={() => dispatch(deleteWishlist(wishlist.id))}>Удалить</button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Редактировать Wishlist</h2>
            <label>
              Название:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Описание:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </label>
            <label>
              URL изображения:
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </label>
            <div className="modal-actions">
              <button onClick={handleEdit}>Сохранить</button>
              <button onClick={() => setIsModalOpen(false)}>Отменить</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistCard;