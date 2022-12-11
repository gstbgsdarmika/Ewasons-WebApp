import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import SideBar from '../components/Sidebar';
import EditProfile from '../components/EditProfile';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { logoutFailure, logoutStart, logoutSuccess } from '../redux/userRedux';
import { putAccessToken } from '../utils/api';

function ProfileAdminPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onLogout() {
    try {
      dispatch(logoutStart());
      putAccessToken('');
    } catch (error) {
      dispatch(logoutFailure());
    }
    putAccessToken('');
    navigate('/login');
    dispatch(logoutSuccess());
  }

  return (
    <>
      <NavBar />
      <div className="profile-admin">
        <div className="row justify-content-between">
          <div className="col-12 col-md-12 col-lg-2">
            <ProSidebarProvider>
              <SideBar logout={onLogout} />
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
