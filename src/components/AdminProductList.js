import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import product from '../assets/img/produk 1.png';
import product2 from '../assets/img/produk 2.png';
import product3 from '../assets/img/produk 3.png';

function AdminProductList() {
  return (
    <div className="list-product mt-5 text-center">
      <Table bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nama produk</th>
            <th>Thumbnail</th>
            <th>Kategori</th>
            <th>Harga (Rp)</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Kabel supreme nym 3x1.5 / 3x1,5 METERAN</td>
            <td><img src={product} alt="produk 1" /></td>
            <td>Elektronik</td>
            <td>120.000</td>
            <td>8</td>
            <td>
              <Button variant="primary">Update</Button>{' '}
              <Button variant="danger">Delete</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Energizer AAAA / A4 E96 Origina Baterai</td>
            <td><img src={product2} alt="produk 1" /></td>
            <td>Elektronik</td>
            <td>120.000</td>
            <td>8</td>
            <td>
              <Button variant="primary">Update</Button>{' '}
              <Button variant="danger">Delete</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Kadonio Kipas Lipat Portable USB Charge</td>
            <td><img src={product3} alt="produk 1" /></td>
            <td>Elektronik</td>
            <td>120.000</td>
            <td>8</td>
            <td>
              <Button variant="primary">Update</Button>{' '}
              <Button variant="danger">Delete</Button>{' '}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminProductList;
