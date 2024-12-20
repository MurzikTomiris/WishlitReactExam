import React from "react"; 
import { useSelector, useDispatch } from "react-redux";
import WishlistCard from "../components/WishlistCard";
import { useNavigate, useLocation } from "react-router-dom";

export const Wishlist = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state || !state.accountId) {
    return <h2>Error: Account ID is required</h2>; 
  }

  const { accountId } = state;

  const wishlists = useSelector((state) =>
    state.wishlists.filter((wishlist) => wishlist.accountId === accountId)
  );

  return (
    <div className="wishlist-page">
      <button className="btn-account" onClick={() => navigate(`/account/${accountId}`)}>
        Go to Account
      </button>
      <h1>My Wishlists</h1>
      <div className="wishlist-grid">
        {wishlists.map((wishlist) => (
          <WishlistCard key={wishlist.id} wishlist={wishlist} />
        ))}
      </div>
    </div>
  );
};