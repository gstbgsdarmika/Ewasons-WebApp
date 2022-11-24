import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Category from '../components/Category';
import Recommendation from '../components/Recommendation';
import About from '../components/About';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <section className="homepage">
      <NavBar />
      <Hero />
      <Category />
      <Recommendation />
      <About />
      <Footer />
    </section>
  );
}

export default HomePage;
