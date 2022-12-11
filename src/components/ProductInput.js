import React, { useState } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import {
  Col, Form, Row, Button,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { DotLoader } from 'react-spinners';
import { useNavigate } from 'react-router';
import app from '../firebase';
import { addProductList } from '../utils/api';

function ProductInput() {
  const { _id } = useSelector((state) => state.user.currentUser);
  const [file, setFile] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [inputForm, setInputForm] = useState({});
  const [category, setCategory] = useState([]);
  const [isFetching, setIsFetcing] = useState(false);
  const navigate = useNavigate();

  const handleInputFormChange = (event) => {
    setInputForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value.split(','));
  };

  console.log(_id);
  console.log(inputForm);

  const handleSubmitButton = (event) => {
    event.preventDefault();
    if (file) {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);

      console.log(file);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        () => {
          setIsFetcing(true);
          // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log(`Upload is ${progress}% done`);
          // switch (snapshot.state) {
          //   case 'paused':
          //     console.log('Upload is paused');
          //     break;
          //   case 'running':
          //     console.log('Upload is running');
          //     break;
          //   default:
          // }
        },
        () => {
          setIsFetcing(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = {
              ...inputForm, image: downloadURL, categories: category, sellerId: _id,
            };
            addProductList(product);
            setIsFetcing(true);
            navigate('/');
          });
        },
      );
    }
  };

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log('picture: ', e.target.files);
      setFile(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="product-input">
      <h1>Tambahkan Produk</h1>
      <p>Lengkapi informasi produk yang anda ingin jual</p>
      <div className="form-input">
        <Form onSubmit={handleSubmitButton}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Nama</Form.Label>
            <Col sm="10"><Form.Control type="text" placeholder="" name="name" onChange={handleInputFormChange} /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Harga (Rp)</Form.Label>
            <Col sm="10"><Form.Control type="text" placeholder="" name="price" onChange={handleInputFormChange} /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Deskripsi</Form.Label>
            <Col sm="10"><Form.Control type="text" placeholder="" name="description" onChange={handleInputFormChange} /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Stok</Form.Label>
            <Col sm="10"><Form.Control type="text" placeholder="" name="stock" onChange={handleInputFormChange} /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Kategori</Form.Label>
            <Col sm="10"><Form.Control type="text" placeholder="" name="categories" onChange={handleCategoryChange} /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Gambar Produk</Form.Label>
            <Col sm="10"><Form.Control type="file" placeholder="" onChange={onChangePicture} /></Col>
            <div className="img-preview mt-3">
              <img src={imgData} alt="Thumbnail preview" className="shadow rounded" />
            </div>
          </Form.Group>

          <div className="mt-2 d-flex justify-content-center align-items-center">
            <Button className="btn3 fw-bold" type="submit" disabled={isFetching}>
              {isFetching ? (
                <div className="d-flex justify-content-center">
                  <DotLoader
                    color="#fff"
                    size={20}
                    speedMultiplier={3}
                  />
                </div>
              ) : (
                'Masuk'
              )}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ProductInput;
