import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import SideBar from '../components/Sidebar';
import AdminProductList from '../components/AdminProductList';
import Footer from '../components/Footer';

function AdminProductListPage() {
  return (
    <>
      <div className="admin-product">
        <div className="row justify-content-between">
          <div className="col-2 ">
            <ProSidebarProvider>
              <SideBar />
            </ProSidebarProvider>
          </div>
          <div className="col-9 mx-auto">
            <AdminProductList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminProductListPage;
