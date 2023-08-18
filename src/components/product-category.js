import React from "react";

const ProductCategory = (props) => {

  return (
    <div className="product">
      <div className="product-image">
        <i className="bi bi-heart favourite"></i>
        <img src={props?.thumbnail} className="product-image" alt="" />
      </div>
      <div className="product-content">
        <div className="product-name">
          <h4>{props?.title}</h4>
        </div>
        <div className="product-desc">
          <p>{props?.description}</p>
        </div>
        <div className="product-price">
          <p>$ {props?.price}</p>
        </div>
        <div className="product-rating">
          <i className="bi bi-star-fill rating"></i>
          <i className="bi bi-star-fill rating"></i>
          <i className="bi bi-star-fill rating"></i>
          <i className="bi bi-star-half rating"></i>
          <i className="bi bi-star rating"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
