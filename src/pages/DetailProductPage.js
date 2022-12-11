import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { DotLoader } from 'react-spinners';
import NavBar from '../components/NavBar';
import ProductDetail from '../components/ProductDetail';
import { getProduct } from '../utils/api';

function DetailProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [initializing, setInitializing] = useState(true);
  console.log(quantity);

  useEffect(() => {
    getProduct(id).then(({ data }) => {
      setProduct(data);
      setInitializing(false);
    });
  }, [id]);

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
      ) : (
        <>
          <NavBar />
          <div>
            <ProductDetail product={product} quantity={quantity} setQuantity={setQuantity} />
          </div>
        </>
      )
    }
    </div>
  );
}

export default DetailProductPage;
