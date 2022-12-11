import React, { useEffect, useState } from 'react';
import { DotLoader } from 'react-spinners';
import Hero from '../components/Hero';
import Category from '../components/Category';
import Recommendation from '../components/Recommendation';
import About from '../components/About';
import Footer from '../components/Footer';
import { getProducts } from '../utils/api';
import NavBar from '../components/NavBar';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    getProducts().then(({ data }) => {
      setProducts(data);
      setInitializing(false);
    });
  }, []);

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
            <Category />
            <Recommendation products={products} />
            <About />
            <Footer />
          </section>
        </>
      )
    }
    </div>
  );
}

export default HomePage;
