import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const successMessage = location.state?.message;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(username, password);
      navigate('/menu-feedback');
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-body">
      <div className="login-box">
        <h2>Hostel Mess System</h2>
        {successMessage && (
          <p style={{ color: '#4CAF50', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>
            {successMessage}
          </p>
        )}
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={loading}
          />
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
          {error && <p style={{ color: '#FF6B6B', marginTop: '10px', fontSize: '14px' }}>{error}</p>}
          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p style={{ marginTop: '15px', textAlign: 'center', color: '#666' }}>
            Don't have an account? <Link to="/register" style={{ color: '#FF6B6B', textDecoration: 'none', fontWeight: '600' }}>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
