import React from 'react';
import {
  FaSearch, FaShoppingCart, FaList, FaAngleDown,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import indonesia from '../assets/img/indonesia.png';

function NavBar() {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 item-header-1 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <div className="logo d-flex justify-content-between align-items-center me-5">
                <img className="img-ewasons me-2" src={logo} alt="Logo EwaSons" />Ewa<span>Sons</span>
              </div>
              <div className="wrap-search">
                <input type="text" className="form-control" placeholder="Cari barang di EwaSons" data-toggle="modal" data-target="#exampleModal" />
                <div className="wrap-icon-search icon-search"><FaSearch /></div>
              </div>
              <div className="wrap-icon-shop mx-3 icon-shop"><FaShoppingCart /></div>
              <span className="me-3 line">|</span>
              <div className="d-flex">
                <Link to="/login"><button type="button" className="btn fw-bold me-3">Masuk</button></Link>
                <Link to="/register"><button type="button" className="btn btn2 fw-bold">Daftar</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 item-header-2 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="category">
                <FaList />
                <span className="ms-2">Kategori</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="help me-3">
                <span className="">Bantuan<FaAngleDown />
                </span>
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
