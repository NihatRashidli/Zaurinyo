import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateWishlist } from "../../redux/features/wishlistSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Cards.css";
import { addBasket } from "../../redux/features/basketSlice";

const Card = ({ card }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.wishlist);

  // Function to add product to wishlist
  const addWishlist = (card) => {
    console.log(card);
    if (user) {
      dispatch(updateWishlist(card));  // Dispatch the action to update wishlist
      notify("Item added to wishlist", "success");
    } else {
      notify("Please login to add to wishlist", "error");
      setTimeout(() => {
        navigate("/login"); // Redirect user to login if they are not logged in
      }, 1500);
    }
  };


  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, [dispatch, user]);

  function notify(text, type) {
    toast(text, {
      type: type,
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  const addToBasket = (product)=>{
    dispatch(addBasket(product))
  }

  return (
    <div className="card">
      <i className="fa-regular fa-heart" onClick={() => addWishlist(card)}></i>
      <div className="card-image">
        <img src={card.image} alt="Product" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{card.title.slice(0, 20) + "..."}</h2>
        <p className="card-category">{card.category}</p>
        <div className="card-footer">
          <span className="card-price">${card.price}</span>
          <div className="card-rating">
            <span>⭐ {card.rating.rate}</span>
            <span>({card.rating.count} reviews)</span>
          </div>
        </div>
      </div>
      <Button variant="contained" color="primary" className="add-to-cart" onClick={()=> addToBasket(card)}>
        Add to Cart
      </Button>
    </div>
  );
};

export default Card;
