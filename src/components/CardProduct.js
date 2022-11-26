import React from 'react';
import { FaStar } from 'react-icons/fa';
import product1 from '../assets/img/produk 1.png';
import product2 from '../assets/img/produk 2.png';
import product3 from '../assets/img/produk 3.png';
import product4 from '../assets/img/produk 4.png';

function CardProduct() {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-3">
        <div className="product-card my-3">
          <div className="product-img">
            <img className="d-block w-100" src={product1} alt="card-product" />
          </div>
          <div className="product-info">
            <h2 className="product-name">Radio Portable FM/AM Sony ICF-306 Radio Sony ICF-306</h2>
            <h3 className="product-price">Rp 129.500</h3>
            <h4 className="rating">4.5 <span className="star"><FaStar /></span> | <span className="product-stock">2</span> stock</h4>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <div className="product-card my-3">
          <div className="product-img">
            <img className="d-block w-100" src={product2} alt="card-product" />
          </div>
          <div className="product-info">
            <h2 className="product-name">Radio Portable FM/AM Sony ICF-306 Radio Sony ICF-306</h2>
            <h3 className="product-price">Rp 129.500</h3>
            <h4 className="rating">4.5 <span className="star"><FaStar /></span> | <span className="product-stock">2</span> stock</h4>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <div className="product-card my-3">
          <div className="product-img">
            <img className="d-block w-100" src={product3} alt="card-product" />
          </div>
          <div className="product-info">
            <h2 className="product-name">Radio Portable FM/AM Sony ICF-306 Radio Sony ICF-306</h2>
            <h3 className="product-price">Rp 129.500</h3>
            <h4 className="rating">4.5 <span className="star"><FaStar /></span> | <span className="product-stock">2</span> stock</h4>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <div className="product-card my-3">
          <div className="product-img">
            <img className="d-block w-100" src={product4} alt="card-product" />
          </div>
          <div className="product-info">
            <h2 className="product-name">Radio Portable FM/AM Sony ICF-306 Radio Sony ICF-306</h2>
            <h3 className="product-price">Rp 129.500</h3>
            <h4 className="rating">4.5 <span className="star"><FaStar /></span> | <span className="product-stock">2</span> stock</h4>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <div className="product-card my-3">
          <div className="product-img">
            <img className="d-block w-100" src={product3} alt="card-product" />
          </div>
          <div className="product-info">
            <h2 className="product-name">Radio Portable FM/AM Sony ICF-306 Radio Sony ICF-306</h2>
            <h3 className="product-price">Rp 129.500</h3>
            <h4 className="rating">4.5 <span className="star"><FaStar /></span> | <span className="product-stock">2</span> stock</h4>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <div className="product-card my-3">
          <div className="product-img">
            <img className="d-block w-100" src={product1} alt="card-product" />
          </div>
          <div className="product-info">
            <h2 className="product-name">Radio Portable FM/AM Sony ICF-306 Radio Sony ICF-306</h2>
            <h3 className="product-price">Rp 129.500</h3>
            <h4 className="rating">4.5 <span className="star"><FaStar /></span> | <span className="product-stock">2</span> stock</h4>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <div className="product-card my-3">
          <div className="product-img">
            <img className="d-block w-100" src={product4} alt="card-product" />
          </div>
          <div className="product-info">
            <h2 className="product-name">Radio Portable FM/AM Sony ICF-306 Radio Sony ICF-306</h2>
            <h3 className="product-price">Rp 129.500</h3>
            <h4 className="rating">4.5 <span className="star"><FaStar /></span> | <span className="product-stock">2</span> stock</h4>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <div className="product-card my-3">
          <div className="product-img">
            <img className="d-block w-100" src={product2} alt="card-product" />
          </div>
          <div className="product-info">
            <h2 className="product-name">Radio Portable FM/AM Sony ICF-306 Radio Sony ICF-306</h2>
            <h3 className="product-price">Rp 129.500</h3>
            <h4 className="rating">4.5 <span className="star"><FaStar /></span> | <span className="product-stock">2</span> stock</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;
