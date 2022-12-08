import React from 'react';
import { Button } from 'react-bootstrap';
import product from '../assets/img/produk 1.png';

function ProductState() {
  return (
    <div className="product-state">
      <div className="product-state-header text-end">
        <h1>Tandai sebagai sudah dibaca</h1>
      </div>
      <div className="main-product-state">
        <div className="card-product-state d-flex justify-content-between">
          <div className="product-img">
            <img src={product} alt="produk 1" />
          </div>
          <div className="product-info">
            <h1>Paket Diterima</h1>
            <p>Paket SPXID02543655812Bdari pesanan 221129C3C55EMQ telah diterima.</p>
            <p>05-12-2022 | 14:00 </p>
          </div>
          <div className="action">
            <Button>Tampilkan Rincian Pesanan</Button>{' '}
          </div>

        </div>
        <div className="card-product-state d-flex justify-content-between">
          <div className="product-img">
            <img src={product} alt="produk 1" />
          </div>
          <div className="product-info">
            <h1>Paket Diterima</h1>
            <p>Paket SPXID02543655812Bdari pesanan 221129C3C55EMQ telah diterima.</p>
            <p>05-12-2022 | 14:00 </p>
          </div>
          <div className="action">
            <Button>Tampilkan Rincian Pesanan</Button>{' '}
          </div>

        </div>
        <div className="card-product-state d-flex justify-content-between">
          <div className="product-img">
            <img src={product} alt="produk 1" />
          </div>
          <div className="product-info">
            <h1>Paket Diterima</h1>
            <p>Paket SPXID02543655812Bdari pesanan 221129C3C55EMQ telah diterima.</p>
            <p>05-12-2022 | 14:00 </p>
          </div>
          <div className="action">
            <Button>Tampilkan Rincian Pesanan</Button>{' '}
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductState;
