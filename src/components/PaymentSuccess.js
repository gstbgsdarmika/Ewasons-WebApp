import React from 'react';
import { Modal } from 'react-bootstrap';
import PaymentSuccessImage from '../assets/img/paymentsuccess.png';

function PaymentSuccess(props) {
  return (
    <div className="payment-success">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title />
        </Modal.Header>
        <Modal.Body className="content d-flex justify-content-center align-items-center">
          <div className="content-left col-md-5">
            <img className="d-block w-100" src={PaymentSuccessImage} alt="card-product" />
          </div>
          <div className="content-right col-12 col-md-7">
            <div className="row d-flex">
              <h1 className="mb-3">Pesanan berhasil dilakukan !</h1>
              <div className="col me-2">
                <h3>Metode Pembayaran</h3>
                <h3>Produk</h3>
                <h3>Total Harga (1 barang)</h3>
                <h3>Estimasi Biaya Pengiriman</h3>
                <h3>Diskon Biaya Pengiriman</h3>
              </div>
              <div className="col">
                <h4>GoPay Coins</h4>
                <h4>Deerma DX115C Vacuum......</h4>
                <h4>Rp 230.900</h4>
                <h4>Rp 4.000</h4>
                <h4>- Rp 4.000</h4>
              </div>
              <div className="line" />
              <div className="row mt-5">
                <div className="col-6 col-md-6">
                  <h1>Total Belanja</h1>
                </div>
                <div className="col-4 col-md-4 ms-3">
                  <h4 className="total">Rp 230.900</h4>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PaymentSuccess;
