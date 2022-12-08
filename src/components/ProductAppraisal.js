import React from 'react';
import appraisal from '../assets/img/appraisal.png';

function ProductAppraisal() {
  return (
    <div className="product-appraisal text-center justify-content-center align-items-center">
      <div className="product-appraisal-img m-auto">
        <img src={appraisal} alt="produk 1" />
      </div>
      <p>Belum Ada Update Penilaian</p>
    </div>
  );
}

export default ProductAppraisal;
