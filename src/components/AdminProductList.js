import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { DotLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { getUserProducts } from '../utils/api';

function AdminProductList() {
  const { _id } = useSelector((state) => state.user.currentUser);
  const [initializing, setInitializing] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getUserProducts(_id).then(({ data }) => {
      setProducts([...data]);
      setInitializing(false);
    });
  }, [_id]);

  return (
    <div>
      {
        initializing ? (
          <div className="loader">
            <DotLoader
              color="#254779"
              size={70}
              speedMultiplier={3}
            />
          </div>
        ) : (products ? (
          <div className="list-product mt-5 text-center">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama produk</th>
                  <th>Thumbnail</th>
                  <th>Kategori</th>
                  <th>Harga (Rp)</th>
                  <th>Stock</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { products.map((product, index) => (
                  <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td><img src={product.image} alt={product.name} /></td>
                    <td>{product.categories.map((cat) => cat).join(', ')}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>
                      <Button variant="primary"><FaEdit /></Button>{' '}
                      <Button variant="danger"><FaTrash /></Button>{' '}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <div className="empty-note-placeholderp-3 mb-5 bg-light shadow rounded p-4 fw-bolder fs-5">Daftar Produk Kosong</div>
        )
        )
      }
    </div>
  );
}

export default AdminProductList;
