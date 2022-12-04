import './styles/main.css';
import './styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import DetailProductPage from './pages/DetailProductPage';
import CartPage from './pages/CartPage';
import RequireAuth from './pages/RequireAuth';
import RequireLogout from './pages/RequireLogout';
import NavBar from './components/NavBar';
import Coba from './pages/Coba';

function App() {
  const authedUser = useSelector((state) => state.user.currentUser);
  console.log(authedUser);

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
  });

  // function onLogout() {
  //   setAuthedUser(null);
  //   putAccessToken('');
  // }

  // async function onLoginSuccess({ accessToken }) {
  //   putAccessToken(accessToken);
  //   const { data } = await getUserLogged();

  //   setAuthedUser(data);
  // }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/register" element={<RequireLogout authedUser={authedUser} />}>
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route path="/login" element={<RequireLogout authedUser={authedUser} />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
        <NavBar authedUser={authedUser} />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/profile" element={<RequireAuth authedUser={authedUser} />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<DetailProductPage />} />
          <Route path="/cart" element={<RequireAuth authedUser={authedUser} />}>
            <Route path="/cart" element={<CartPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/coba" element={<Coba />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
