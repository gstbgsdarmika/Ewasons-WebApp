import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import SideBar from '../components/Sidebar';
import ProductState from '../components/ProductState';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function ProductStatePage() {
  return (
    <>
      <NavBar />
      <div className="product-state-page">
        <div className="row justify-content-between">
          <div className="col-12 col-md-12 col-lg-2">
            <ProSidebarProvider>
              <SideBar />
            </ProSidebarProvider>
          </div>
          <div className="col-12 col-md-12 col-lg-9 mx-auto">
            <ProductState />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductStatePage;
