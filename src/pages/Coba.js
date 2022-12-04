import React from 'react';
import { Button } from 'react-bootstrap';
import PaymentSuccess from '../components/PaymentSuccess';

function Coba() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="coba">
      <PaymentSuccess
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Bayar Sekarang
      </Button>
    </div>
  );
}

export default Coba;
