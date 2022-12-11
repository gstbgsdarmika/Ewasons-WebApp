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
  const [initializing, setInitializing] = React.useState(true);

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
              <div className="filters d-flex justify-content-end me-4 mt-4 align-items-center">
                <p className="m-3 fw-bold">Urutkan :</p>
                <div className="filters-button">
                  <div className="row">
                    <div className="col">
                      <select className="form-select" onChange={(event) => setSort(event.target.value)} aria-label="Default select example">
                        <option hidden disabled selected value> Paling Sesuai </option>
                        <option value="newest">Terbaru</option>
                        <option value="asc">Harga Terendah</option>
                        <option value="desc">Harga Tertinggi</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
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
