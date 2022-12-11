/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import './styles/main.css';
import './styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DotLoader } from 'react-spinners';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import DetailProductPage from './pages/DetailProductPage';
import CartPage from './pages/CartPage';
import { logoutFailure, logoutStart, logoutSuccess } from './redux/userRedux';
import { putAccessToken } from './utils/api';
import IdleTimer from './utils/IdleTimer';
import Coba from './pages/Coba';
import ProfileAdminPage from './pages/ProfileAdminPage';
import ProfileUserPage from './pages/ProfileUserPage';
import EditProfile from './components/EditProfile';
import AddProductPage from './pages/AddProductPage';
import AdminProductListPage from './pages/AdminProductListPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import AddressPage from './pages/AddressPage';
import ProductStatePage from './pages/ProductStatePage';
import ProductAppraisalPage from './pages/ProductAppraisalPage';
import PromoProductPage from './pages/PromoPage';
import { resetCart } from './redux/cartRedux';

function App() {
  const authedUser = useSelector((state) => state.user.currentUser);
  const [initializing, setInitializing] = useState(false);
  const dispatch = useDispatch();
  const [isTimeOut, setIsTimeout] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const snapSrcUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
    const MidtransClientKey = process.env.MIDTRANS_CLIENT_KEY_SB;

    const script = document.createElement('script');
    script.src = snapSrcUrl;
    script.setAttribute('data-client-key', MidtransClientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
    dispatch(resetCart());
  }

  useEffect(() => {
    if (authedUser) {
      const timer = new IdleTimer({
        timeout: 1800, // expire after 30 minute
        onTimeout: () => {
          setIsTimeout(true);
          onLogout();
        },
        onExpired: () => {
          // do something if expired on load
          setIsTimeout(true);
        },
      });
      return () => {
        timer.cleanUp();
      };
    }
  }, [authedUser]);

  return (
    <div className="App">
      {
        initializing ? (
          <div className="loader">
            <DotLoader
              color="#254779"
              size={70}
              speedMultiplier={3}
            />
          </div>
        ) : (authedUser ? (
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profileadmin" element={<ProfilePage logout={onLogout} />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<DetailProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/coba" element={<Coba />} />
              <Route path="/profileuser" exact element={<ProfileUserPage />} />
              <Route path="/profileuser/editprofile" exact element={<EditProfile />} />
              <Route path="/profileuser/address" exact element={<AddressPage />} />
              <Route path="/profileuser/changepassword" exact element={<ChangePasswordPage />} />
              <Route path="/profileuser/productstate" exact element={<ProductStatePage />} />
              <Route path="/profileuser/addproduct" exact element={<AddProductPage />} />
              <Route path="/profileuser/productappraisal" exact element={<ProductAppraisalPage />} />
              <Route path="/profileuser/adminproductlist" exact element={<AdminProductListPage />} />
              <Route path="/profileuser/promo" exact element={<PromoProductPage />} />
              <Route path="/profileadmin" exact element={<ProfileAdminPage />} />
              <Route path="/profileadmin/editprofile" exact element={<EditProfile />} />
              <Route path="/profileadmin/address" exact element={<AddressPage />} />
              <Route path="/profileadmin/changepassword" exact element={<ChangePasswordPage />} />
              <Route path="/profileadmin/productstate" exact element={<ProductStatePage />} />
              <Route path="/profileadmin/addproduct" exact element={<AddProductPage />} />
              <Route path="/profileadmin/productappraisal" exact element={<ProductAppraisalPage />} />
              <Route path="/profileadmin/adminproductlist" exact element={<AdminProductListPage />} />
              <Route path="/profileadmin/promo" exact element={<PromoProductPage />} />
            </Routes>
          </main>
        ) : (
          <main>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<DetailProductPage />} />
            </Routes>
          </main>
        )
        )
      }
    </div>
  );
}

export default App;
