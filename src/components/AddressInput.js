import React from 'react';
import { Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

function AddressInput() {
  return (
    <div className="address-input">
      <div className="header-address d-flex justify-content-between">
        <h1>Alamat Saya</h1>
        <Button><FaPlus /> Tambah Alamat Baru</Button>{' '}
      </div>
      <div className="main-address">
        <h1>Alamat</h1>
        <div className="card-address d-flex justify-content-between">
          <div className="address-user">
            <h2>Bgs Darmika <span>| (+62) 85792715585</span></h2>
            <h3>JL WR SUPRATMAN No.183, Kesiman, Denpasar Tim.</h3>
            <h3>Denpasar, Bali 80237, Indonesia</h3>
            <Button className="active">Utama</Button>{' '}
            <Button>Alamat Toko</Button>{' '}
          </div>
          <div className="address-map">
            <h2>Ubah</h2>
            <Button>Atur sebagai utama</Button>{' '}
          </div>
        </div>

        <div className="card-address d-flex justify-content-between">
          <div className="address-user">
            <h2>Bgs Darmika <span>| (+62) 85792715585</span></h2>
            <h3>JL WR SUPRATMAN No.183, Kesiman, Denpasar Tim.</h3>
            <h3>Denpasar, Bali 80237, Indonesia</h3>
          </div>
          <div className="address-map">
            <h2>Ubah</h2>
            <Button>Atur sebagai utama</Button>{' '}
          </div>
        </div>

        <div className="card-address d-flex justify-content-between">
          <div className="address-user">
            <h2>Bgs Darmika <span>| (+62) 85792715585</span></h2>
            <h3>JL WR SUPRATMAN No.183, Kesiman, Denpasar Tim.</h3>
            <h3>Denpasar, Bali 80237, Indonesia</h3>
          </div>
          <div className="address-map">
            <h2>Ubah</h2>
            <Button>Atur sebagai utama</Button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressInput;
