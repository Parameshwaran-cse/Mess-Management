import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import MenuFeedback from './pages/MenuFeedback';
import MessInfo from './pages/MessInfo';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }>
            <Route path="/menu-feedback" element={<MenuFeedback />} />
            <Route path="/mess-info" element={<MessInfo />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
