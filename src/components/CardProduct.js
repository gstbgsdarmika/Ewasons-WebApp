import React from 'react';
import { FaStar } from 'react-icons/fa';

function CardProduct({
  name, image, price, rating, stock,
}) {
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <div className="product-card my-3">
        <div className="product-img">
          <img className="d-block w-100" src={image} alt="card-product" />
        </div>
        <div className="product-info">
          <h2 className="product-name">{name}</h2>
          <h3 className="product-price">Rp {price}</h3>
          <h4 className="rating">{rating} <span className="star"><FaStar /></span> | <span className="product-stock">{stock}</span> stock</h4>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
