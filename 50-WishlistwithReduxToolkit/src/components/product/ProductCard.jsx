import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToWishlist } from '../../redux/features/wishlistSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.isLogin);
  const navigate = useNavigate();

  const handleAddToWishlist = () => {
    if (!isLogin) {
      alert('Wishlist üçün əvvəlcə daxil olun!');
      navigate('/login');
    } else {
      dispatch(addToWishlist(product));
      navigate('/wishlist');
    }
  };

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToWishlist}>Wishlist-ə əlavə et</button>
    </div>
  );
};

export default ProductCard;
