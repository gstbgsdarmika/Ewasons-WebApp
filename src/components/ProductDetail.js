import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Rating } from 'react-simple-star-rating';
import { addProduct } from '../redux/cartRedux';

function ProductDetail({ product, quantity, setQuantity }) {
  const dispatch = useDispatch();

  function handleQuantityButton(type) {
    if (type === 'dec') {
      if (quantity > 1) setQuantity(quantity - 1);
    } else if (type === 'inc') {
      if (quantity < product.stock) setQuantity(quantity + 1);
    }
  }

  function handleAddToCartButton() {
    dispatch(addProduct({ ...product, quantity }));
  }

  return (
    <div className="card-detail">
      <div className="detail-content">
        <div className="detail-content__image">
          <img src={product.image} alt={product.name} className="shadow p-3 bg-body" />
        </div>
        <div className="detail-content__body">
          <h2>{product.name}</h2>
          <div className="detail-content__additional-text">
            <Rating
              initialValue={product.rating}
              iconsCount={5}
              allowFraction
              readonly
              size={20}
            />
          </div>
          <div className="detail-content__description">
            <p>{product.description}</p>
          </div>
          <div className="detail-content__additional">
            <div className="detail-content__additional-text">
              <h4>Rp. {product.price}</h4>
            </div>
            <div className="detail-content__additional-text">
              <h4>Stock: {product.stock}</h4>
            </div>
          </div>
          <div className="detail-content__btn">
            <div className="quantity-form">
              <div className="input-group">
                <div className="input-group-btn">
                  <button aria-label="Decrease Button" type="button" className="btn-default" onClick={() => handleQuantityButton('dec')}><FaMinus /></button>
                </div>
                <input type="text" id="myNumber" className="form-control input-number" value={quantity} readOnly />
                <div className="input-group-btn">
                  <button aria-label="Increase Button" type="button" className="btn-default" onClick={() => handleQuantityButton('inc')}><FaPlus /></button>
                </div>
              </div>
            </div>
            <button type="button" className="btn" onClick={handleAddToCartButton}>Tambah ke Keranjang</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductDetail;
