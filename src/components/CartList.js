import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../redux/cartRedux';
import CartItem from './CartItem';

function CartList({ cart }) {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.quantity);

  function handleDeleteFromCartButton(id) {
    dispatch(deleteProduct(id));
  }

  return (
    <div className="col-lg-7">
      <h5 className="mb-3">
        <Link to="/products" className="text-body back-btn">
          <FaArrowLeft />
          Continue shopping
        </Link>
      </h5>
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h5 className="mb-2">Shopping cart</h5>
          <p className="mb-0">Anda memiliki {cartQuantity} item di keranjang</p>
        </div>
      </div>
      <div className="cart-list">
        {
          cart.products.map((product, index) => (
            <CartItem product={product} key={product._id} index={index} onDelete={handleDeleteFromCartButton} />
          ))
        }
      </div>
    </div>
  );
}

export default CartList;
