import './styles/main.css';
import './styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import DetailProductPage from './pages/DetailProductPage';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<DetailProductPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
