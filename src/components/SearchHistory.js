import Modal from 'react-bootstrap/Modal';
import { BiTime } from 'react-icons/bi';

function SearchHistory() {
  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Terakhir dicari</h3>
            <span className="ms-3">Hapus Semua</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><BiTime /> Komputer bekas</p>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export default SearchHistory;
