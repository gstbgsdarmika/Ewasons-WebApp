import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import SideBar from '../components/Sidebar';
import PromoProduct from '../components/Promo';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function PromoProductPage() {
  return (
    <>
      <NavBar />
      <div className="promo-product-page">
        <div className="row justify-content-between">
          <div className="col-12 col-md-12 col-lg-2">
            <ProSidebarProvider>
              <SideBar />
            </ProSidebarProvider>
          </div>
          <div className="col-12 col-md-12 col-lg-9 mx-auto">
            <PromoProduct />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PromoProductPage;
