import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Category from '../components/Category';
import Recommendation from '../components/Recommendation';
import About from '../components/About';
import Footer from '../components/Footer';
import { getProducts } from '../utils/api';
import NavBar from '../components/NavBar';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(({ data }) => {
      setProducts(data);
      // setInitializing(false);
    });
  }, []);

  return (
    <>
      <NavBar />
      <section className="homepage">
        <Hero />
        <Category />
        <Recommendation products={products} />
        <About />
        <Footer />
      </section>
    </>
  );
}

export default HomePage;
