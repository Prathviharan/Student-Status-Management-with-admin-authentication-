import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      navigate('/dashboard');
    } else {
      setError('Invalid Credentials');
    }
  };

  const handleGoogleLogin = (response) => {
    console.log(response);
    navigate('/dashboard');
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="container mt-5">
      <h2>Admin Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success btn-block mt-3">
          Login
        </button>
      </form>

      <div className="my-3 text-center">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={handleGoogleLogin}    
          useOneTap 
          theme="filled_blue" 
          shape="pill"       
          width="300"    
        />
      </div>

      <div className="text-center mt-3">
        <button
          onClick={handleRegisterRedirect}
          className="btn btn-link"
        >
          Don't have an account? Register here
        </button>
      </div>
    </div>
  );
};

export default Login;
