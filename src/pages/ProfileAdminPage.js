import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import SideBar from '../components/Sidebar';
import EditProfile from '../components/EditProfile';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function ProfileAdminPage() {
  return (
    <>
      <NavBar />
      <div className="profile-admin">
        <div className="row justify-content-between">
          <div className="col-12 col-md-12 col-lg-2">
            <ProSidebarProvider>
              <SideBar />
            </ProSidebarProvider>
          </div>
          <div className="col-12 col-md-12 col-lg-9 mx-auto">
            <EditProfile />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfileAdminPage;
