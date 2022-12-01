import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Category from '../components/Category';
import Recommendation from '../components/Recommendation';
import About from '../components/About';
import Footer from '../components/Footer';
import { getProducts } from '../utils/api';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(({ data }) => {
      setProducts(data);
      // setInitializing(false);
    });
  }, []);

  return (
    <section className="homepage">
      <NavBar />
      <Hero />
      <Category />
      <Recommendation products={products} />
      <About />
      <Footer />
    </section>
  );
}

export default HomePage;
