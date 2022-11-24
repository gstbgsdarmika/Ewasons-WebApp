import React from 'react';
import NavigationBar from '../components/NavigationBar';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import ControlledCarousel from '../components/ControlledCarousel';

function Products() {
  return (
    <>
      <NavigationBar />
      <div className="px-5 py-4">
        <ControlledCarousel />
        <SearchBar />
        <ProductList />
      </div>
    </>
  );
}

export default Products;
