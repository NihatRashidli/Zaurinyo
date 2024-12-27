import React, { useEffect } from "react";
import "./Wishlist.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateWishlist } from "../redux/features/wishlistSlice";
import { fetchProducts } from "../redux/features/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.wishlist);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (product) => {
    if (user) {
      dispatch(updateWishlist(product));
    }
  };

  const handleClearWishlist = () => {
    if (user) {
      dispatch(updateWishlist([]));
    }
  };

  console.log(user);
  


  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <h1>Your Wishlist</h1>
      <section className="wishlist-container">
        <div className="container">
          <div className="row">
            {user && user.Wishlist && user.Wishlist.length > 0 ? (
              <div className="wishlist">
                {user.Wishlist.map((wishlistItem) => {
                  const product = products.find(
                    (item) => item.id === wishlistItem.id
                  );
                  return (
                    product && (
                      <div className="wishlist-item" key={product.id}>
                        <div className="image">
                          <img
                            src={product.thumbnail}
                            alt={product.title}
                          />
                        </div>
                        <h3 className="title">{product.title}</h3>
                        <p className="category">{product.category}</p>
                        <p className="price">${product.price}</p>
                        <button
                          className="btn btn-danger removeBtn"
                          onClick={() => handleDelete(product)}
                        >
                          Remove
                        </button>
                      </div>
                    )
                  );
                })}
                <button
                  className="btn btn-warning clearBtn"
                  onClick={handleClearWishlist}
                >
                  Clear All
                </button>
              </div>
            ) : (
              <p className="empty">Your wishlist is empty</p>
            )}
            <Link className="link" to="/">
              Back
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
