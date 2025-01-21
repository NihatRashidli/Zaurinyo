import React from "react";
import "./Category.scss";

const Category = () => {
  return (
    <div>
        <div>
          <h1 className="titles">Shop By Category</h1>
        </div>
        <div className="cat-photo">
          <div className="photos">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg.webp"
              alt=""
            />
          </div>
          <div className="photos">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg.webp"
              alt=""
            />
          </div>
          <div className="photos">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg.webp"
              alt=""
            />
          </div>
      </div>
    </div>
  );
};

export default Category;
