import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import About from '../components/About';
import Footer from '../components/Footer';
import { getProducts } from '../utils/api';
import NavBar from '../components/NavBar';

function ProductsPage() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('');
  const [category] = React.useState(() => searchParams.get('category') || '');
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    getProducts(category).then(({ data }) => {
      setProducts([...data]);
      setInitializing(false);
    });
  }, [category]);

  useEffect(() => {
    if (sort === 'newest') {
      setProducts((prevProducts) => {
        const newProducts = prevProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return [...newProducts];
      });
    } else if (sort === 'asc') {
      setProducts((prevProducts) => {
        const newProducts = prevProducts.sort((a, b) => a.price - b.price);
        return [...newProducts];
      });
    } else if (sort === 'desc') {
      setProducts((prevProducts) => {
        const newProducts = prevProducts.sort((a, b) => b.price - a.price);
        return [...newProducts];
      });
    }
    setInitializing(false);
  }, [sort]);

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
            <section className="homepage">
              <Hero />
              <select className="mx-4 form-select" defaultValue="" onChange={(event) => setSort(event.target.value)} aria-label="Default select example">
                <option hidden value=""> -- select an option -- </option>
                <option value="newest">Terbaru</option>
                <option value="asc">Harga (ASC)</option>
                <option value="desc">Harga (DESC)</option>
              </select>
              <ProductList products={products} />
              <About />
              <Footer />
            </section>
          </>
        )
      }
    </div>
  );
}

export default ProductsPage;
