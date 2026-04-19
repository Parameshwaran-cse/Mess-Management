import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header({ title }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <h2>{title}</h2>
      <nav>
        <Link 
          to="/menu-feedback" 
          className={location.pathname === '/menu-feedback' ? 'active' : ''}
        >
          Menu & Feedback
        </Link>
        <Link 
          to="/mess-info"
          className={location.pathname === '/mess-info' ? 'active' : ''}
        >
          Mess Info
        </Link>
        <button className="btn" onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;
