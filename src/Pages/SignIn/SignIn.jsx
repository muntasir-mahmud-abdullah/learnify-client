import React, { useContext, useState } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthContext from '../../Context/AuthContext/AuthContext';
import GoogleSignIn from '../Shared/GoogleSignIn';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import {motion} from 'framer-motion'
const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [error, setError] = useState('');

  const handleSignIn = async e => {
    e.preventDefault();
    setError('');
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signInUser(email, password);
      toast.success('Signed in successfully!');
      navigate(from, { replace: true });
    } catch {
      toast.error('Sign-in failed');
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-4xl w-full grid lg:grid-cols-2 gap-8 p-6">
        {/* Illustration or Info Panel */}
        <div className="hidden lg:flex items-center justify-center">
          <img
            src="https://i.ibb.co/Q3nqxtRL/Chat-GPT-Image-Jun-11-2025-10-35-39-PM.png"
            alt="Learning illustration"
            className="w-3/4 animate-fade-in"
          />
        </div>

        {/* Form Panel */}
        <div className="bg-base-100 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-extrabold text-center text-primary mb-6 dark:text-primary-light">
            Welcome Back!
          </h1>

          <form onSubmit={handleSignIn} className="space-y-5">
            {/* Email */}
            <div className="relative">
              <EnvelopeIcon className="w-5 h-5 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <input
                name="email"
                type="email"
                placeholder="Email address"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <LockClosedIcon className="w-5 h-5 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            {/* Submit */}
            <motion.button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Sign In
            </motion.button>

            {/* Divider */}


            {/* Google */}
            <GoogleSignIn redirectTo={from} />
          </form>

          {/* Register Link */}
          <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
            Don’t have an account?{' '}
            <NavLink to="/register" className="text-primary hover:underline">
              Register here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
