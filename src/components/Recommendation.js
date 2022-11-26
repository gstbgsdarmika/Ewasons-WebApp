import React from 'react';
import CardProduct from './CardProduct';

function Recommendation() {
  return (
    <div className="recommendation mx-4">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <h1 className="header-recommendation">Rekomendasi</h1>
          </div>
        </div>
        <div className="row list-recommendation d-flex justify-content-center align-items-center">
          <CardProduct />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn more">Muat lebih banyak</button>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
