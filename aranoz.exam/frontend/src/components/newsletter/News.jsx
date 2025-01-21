import React from "react";
import './News.scss'

const News = () => {
  return (
    <div className="news">
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7 news-content"></div>
          <p>Join Our Newsletter</p>
          <h1>Subscribe to get Updated with new offers</h1>
          <input type="text" />
          <button className="btn btn-danger">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default News;
