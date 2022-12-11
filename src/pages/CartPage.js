import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import CartList from '../components/CartList';
import NavBar from '../components/NavBar';
import { createTransactionSB } from '../utils/api';
import { currencyFormatter } from '../utils/formatterString';

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <NavBar />
      <section className="cartpage">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body cart-item p-4">

                  <div className="row">
                    <CartList cart={cart} />
                    <div className="col-lg-5">
                      <div className="rounded shadow card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Ringkasan Pesanan</h5>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className="img-fluid rounded-3"
                            style={{ width: '45px' }}
                            alt="Avatar"
                          />
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between my-2">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">{currencyFormatter(cart.total)}</p>
                        </div>
                        <div className="d-flex justify-content-between my-2">
                          <p className="mb-2">Estimasi Biaya Pengiriman</p>
                          <p className="mb-2">Rp 4.000</p>
                        </div>
                        <div className="d-flex justify-content-between my-2">
                          <p className="mb-2">Diskon Biaya Pengiriman</p>
                          <p className="mb-2">- Rp 4.000</p>
                        </div>
                        <div className="d-flex justify-content-between mb-4 my-2">
                          <p className="mb-2">Total</p>
                          <p className="mb-2">{currencyFormatter(cart.total)}</p>
                        </div>

                        <button type="button" className="btn-checkout btn btn-info btn-block btn-lg" onClick={() => createTransactionSB({ amount: cart.total, email: user.email, username: user.username })}>
                          <div className="d-flex justify-content-between">
                            <span>{currencyFormatter(cart.total)}</span>
                            <span className="button-left">Checkout <span className="button-logo"><FaArrowRight /></span></span>
                          </div>
                        </button>

                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartPage;
