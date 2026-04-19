import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../services/api';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      await api.auth.register(username, password, role);
      navigate('/', { state: { message: 'Registration successful! Please login.' } });
    } catch (err) {
      setError(err.message || 'Registration failed. Username may already exist.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-body">
      <div className="login-box">
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength="3"
            disabled={loading}
          />
          
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
            disabled={loading}
          />
          
          <label>Confirm Password</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={loading}
          />
          
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} disabled={loading}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
          
          {error && <p style={{ color: '#FF6B6B', marginTop: '10px', fontSize: '14px' }}>{error}</p>}
          
          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'Creating Account...' : 'Register'}
          </button>
          
          <p style={{ marginTop: '15px', textAlign: 'center', color: '#666' }}>
            Already have an account? <Link to="/" style={{ color: '#FF6B6B', textDecoration: 'none', fontWeight: '600' }}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
