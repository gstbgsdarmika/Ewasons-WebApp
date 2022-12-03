import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
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

  return (
    <div>
      <ProductDetail product={product} quantity={quantity} setQuantity={setQuantity} />
    </div>
  );
}

export default DetailProductPage;
