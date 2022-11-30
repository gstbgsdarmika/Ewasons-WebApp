import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NavBar from '../components/NavBar';
import ProductDetail from '../components/ProductDetail';
import { getProduct } from '../utils/api';

function DetailProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProduct(id).then(({ data }) => {
      setProduct(data);
      // setInitializing(false);
    });
  }, [id]);

  console.log(id);
  console.log(product);

  return (
    <div>
      <NavBar />
      <ProductDetail product={product} quantity={quantity} setQuantity={setQuantity} />
    </div>
  );
}

export default DetailProductPage;
