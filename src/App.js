import './styles/main.css';
import './styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
