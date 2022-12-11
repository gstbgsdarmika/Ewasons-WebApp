import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { currencyFormatter } from '../utils/formatterString';

function CartItem({ product, onDelete, index }) {
  return (
    <div className="card rounded-3 mb-4">
      <div className="card-body">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img
              src={product.image}
              className="img-fluid rounded-3"
              alt="Cotton T-shirt"
            />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-5 cart-item__detail">
            <p className="lead fw-normal mb-2">{product.name}</p>
            <p>{currencyFormatter(product.price * product.quantity)}</p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 d-flex">
            <p className="lead fw-normal mb-2">{product.quantity} x</p>
          </div>
          {/* <div className="col-md-3 col-lg-4 col-xl-3">
            <h5 className="mb-0">Rp 200.000</h5>
          </div> */}
          <div className="col-md-1 col-lg-1 col-xl-2 text-end">
            <button type="button" onClick={() => onDelete(index)} className="btn btn-danger px-2" aria-label="Delete item"><FaTrash /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
