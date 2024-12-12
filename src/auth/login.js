import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DecryptData from '../utils/Decryption';
import EncryptData from '../utils/Encrption';
import '../css/login.css';
import Toaster from '../utils/Toaster';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setIsLoading(true); // Show loader

    try {
      const response = await axios.post('http://localhost:9696/admin/adminLogin',EncryptData({
        username:username,
        password:password,
      }));
      
      const data = DecryptData(response.data.encrypted);
      const name = data.result.first_name;
      const message = `Welcome Back! ${name}`;

      if (data.status) {
        navigate('/admin/dashboard');
        Toaster(message); 
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username or Email Id *</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password *</label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="form-control border-right"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn border-left"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? '🙉' : '🙈'}
              </button>
            </div>
          </div>
          {error && <div className="text-danger mb-3">{error}</div>}
          <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
