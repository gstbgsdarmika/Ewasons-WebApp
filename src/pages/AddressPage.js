import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import SideBar from '../components/Sidebar';
import AddressInput from '../components/AddressInput';
import Footer from '../components/Footer';

function AddressPage() {
  return (
    <>
      <div className="address-page">
        <div className="row justify-content-between">
          <div className="col-2 ">
            <ProSidebarProvider>
              <SideBar />
            </ProSidebarProvider>
          </div>
          <div className="col-9 mx-auto">
            <AddressInput />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddressPage;
