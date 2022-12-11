import React from 'react';
import {
  FaSearch,
  FaShoppingCart,
  FaList,
} from 'react-icons/fa';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../assets/img/logo.svg';
import indonesia from '../assets/img/indonesia.png';
import { logoutFailure, logoutStart, logoutSuccess } from '../redux/userRedux';
import { putAccessToken } from '../utils/api';
import { resetCart } from '../redux/cartRedux';

function NavBar() {
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const authedUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onLogout() {
    try {
      dispatch(logoutStart());
      putAccessToken('');
    } catch (error) {
      dispatch(logoutFailure());
    }
    putAccessToken('');
    navigate('/login');
    dispatch(logoutSuccess());
    dispatch(resetCart());
  }

  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 item-header-1 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/" className="navbar-logo">
                <div className="logo d-flex justify-content-between align-items-center me-5">
                  <img className="img-ewasons me-2" src={logo} alt="Logo EwaSons" />
                  <h1>Ewa<span>Sons</span></h1>
                </div>
              </Link>
              <div className="wrap-search">
                <input type="text" className="form-control" placeholder="Cari barang di EwaSons" data-toggle="modal" data-target="#exampleModal" />
                <div className="wrap-icon-search icon-search"><FaSearch /></div>
              </div>
              {authedUser
                ? (
                  <div className="d-flex">
                    <Link to="/cart">
                      <div className="wrap-icon-shop ms-5 me-3 icon-shop position-relative">
                        <FaShoppingCart />
                        {cartQuantity
                          ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">{cartQuantity}</span>
                          : <span />}
                      </div>
                    </Link>
                    <Dropdown>
                      <Dropdown.Toggle className="dropdown-profile" id="dropdown-basic">
                        <div className="img-profile">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className=" img-fluid rounded-circle"
                            alt="Avatar"
                          />
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Link className="category-link dropdown-item fw-semibold" to="/profile">Akun Saya</Link>
                        <Link className="category-link dropdown-item fw-semibold" to="#/">Pesanan Saya</Link>
                        <button type="button" className="category-link dropdown-item fw-semibold text-danger" onClick={onLogout}>Keluar</button>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                )
                : (
                  <div className="auth-button d-flex">
                    <Link to="/login"><button type="button" className="btn fw-bold me-2">Masuk</button></Link>
                    <Link to="/register"><button type="button" className="btn btn2 fw-bold">Daftar</button></Link>
                  </div>
                )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 item-header-2 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="category">
                <Dropdown>
                  <Dropdown.Toggle className="dropdown-category" id="dropdown-basic">
                    <span><FaList className="me-2" /> Kategori </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item className="category-link" href="#/action-1">Kabel & Biasa Digunakan Aksesori</Dropdown.Item>
                    <Dropdown.Item className="category-link" href="#/action-2">Kamera, Foto & Aksesoris</Dropdown.Item>
                    <Dropdown.Item className="category-link" href="#/action-3">Komputer Hardware & Software</Dropdown.Item>
                    <Dropdown.Item className="category-link" href="#/action-4">Ponsel & Aksesoris</Dropdown.Item>
                    <Dropdown.Item className="category-link" href="#/action-4">Pengisi Daya, Baterai & Daya Persediaan</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="d-flex">
              <div className="help me-3">
                <Dropdown>
                  <Dropdown.Toggle className="dropdown-help" id="dropdown-basic">
                    <span>Bantuan</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="help-link" href="#/action-1">FAQ's</Dropdown.Item>
                    <Dropdown.Item className="help-link" href="#/action-2">Pusat bantuan</Dropdown.Item>
                    <Dropdown.Item className="help-link" href="#/action-3">Syarat dan Ketentuan</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="language">
                <img className="img-indonesia me-2" src={indonesia} alt="Bendera Indonesia" />
                ID
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
