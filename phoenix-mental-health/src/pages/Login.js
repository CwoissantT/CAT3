import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onLoginSuccess, onSignupOpen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('/api/user/session');
        const data = await response.json();
        
        // If the user is already logged in, redirect to home
        if (data.logged_in) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error checking session:', error);
      }
    };

    checkSession();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = { email, password };
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed. Please try again.');
        return;
      }

      // If login is successful, clear the form and call onLoginSuccess
      setEmail('');
      setPassword('');
      setErrorMessage('');
      navigate('/');
    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-4xl font-bold text-center">Log in</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          {errorMessage && (
            <p className="text-sm text-red-600 text-center">
              {errorMessage}
            </p>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2 rounded focus:ring focus:ring-green-200" />
              Remember me
            </label>
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white bg-green-700 rounded-md hover:bg-green-800 focus:outline-none focus:ring focus:ring-green-200"
          >
            Login
          </button>

          <p className="text-sm text-center text-gray-600">
            Don’t have an Account?{' '}
            <a
              href="/Register"
              onClick={onSignupOpen}
              className="font-medium text-green-600 hover:underline"
            >
              Click here to sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

