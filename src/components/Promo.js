import React from 'react';
import { Button } from 'react-bootstrap';
import promo from '../assets/img/promo.png';

function PromoProduct() {
  return (
    <div className="promo-product">
      <div className="promo-product-header text-end">
        <h1>Tandai sebagai sudah dibaca</h1>
      </div>
      <div className="main-promo-product">
        <div className="card-promo-product d-flex justify-content-between">
          <div className="product-img">
            <img src={promo} alt="produk 1" />
          </div>
          <div className="product-info">
            <h1>Paket Diterima</h1>
            <p>Tambanhkan juga produk lain yang pernah kamu Beli sebelumnya checkout sekarang!</p>
            <p>05-12-2022 | 14:00 </p>
          </div>
          <div className="action">
            <Button>Tampilkan Rincian</Button>{' '}
          </div>

        </div>
        <div className="card-promo-product d-flex justify-content-between">
          <div className="product-img">
            <img src={promo} alt="produk 1" />
          </div>
          <div className="product-info">
            <h1>Paket Diterima</h1>
            <p>Tambanhkan juga produk lain yang pernah kamu Beli sebelumnya checkout sekarang!</p>
            <p>05-12-2022 | 14:00 </p>
          </div>
          <div className="action">
            <Button>Tampilkan Rincian</Button>{' '}
          </div>

        </div>
        <div className="card-promo-product d-flex justify-content-between">
          <div className="product-img">
            <img src={promo} alt="produk 1" />
          </div>
          <div className="product-info">
            <h1>Paket Diterima</h1>
            <p>Tambanhkan juga produk lain yang pernah kamu Beli sebelumnya checkout sekarang!</p>
            <p>05-12-2022 | 14:00 </p>
          </div>
          <div className="action">
            <Button>Tampilkan Rincian</Button>{' '}
          </div>

        </div>
      </div>
    </div>
  );
}

export default PromoProduct;
