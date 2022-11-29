import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import About from '../components/About';
import Footer from '../components/Footer';
import { getProducts } from '../utils/api';

function ProductsPage() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('');
  const [category] = React.useState(() => searchParams.get('category') || '');
  // const [initializing, setInitializing] = React.useState(true);
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts(category).then(({ data }) => {
      setProducts(data);
      // setInitializing(false);
    });
  }, [category]);

  useEffect(() => {
    if (sort === 'newest') {
      setProducts((prevProducts) => {
        const newProducts = prevProducts.sort((a, b) => a.createdAt - b.createdAt);

        return newProducts;
      });
    } else if (sort === 'desc') {
      setProducts((prevProducts) => {
        const newProducts = prevProducts.sort((a, b) => a.price - b.price);

        return newProducts;
      });
    } else {
      setProducts((prevProducts) => {
        const newProducts = prevProducts.sort((a, b) => b.price - a.price);

        return newProducts;
      });
    }
    console.log(sort);
    console.log(products);
  }, [sort]);

  // const location = useLocation();
  // const category = location.search.split('=')[1];
  return (
    <section className="homepage">
      <NavBar />
      <Hero />
      <select className="mx-4 form-select" onChange={(event) => setSort(event.target.value)} aria-label="Default select example">
        <option value="newest">Terbaru</option>
        <option value="asc">Harga (asc)</option>
        <option value="desc">Harga (desc)</option>
      </select>
      <ProductList products={products} />
      <About />
      <Footer />
    </section>
  );
}

export default ProductsPage;
