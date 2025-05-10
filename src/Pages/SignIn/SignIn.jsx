import React, { useContext, useState } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';
import GoogleSignIn from '../Shared/GoogleSignIn';
import { useLocation, useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"
const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [error, setError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        // console.log('User signed in:', result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        // console.error('Sign-in error:', err.message);
        toast.error("Sign In Error")
        setError('Failed to sign in. Please check your credentials.');
      });
  };

  return (
    <div className="hero bg-base-200 p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 p-10 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl text-center font-bold">Sign In</h1>
          <form onSubmit={handleSignIn} className="card-body">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text-alt text-gray-500">
                  Forgot password? (Feature disabled)
                </span>
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>

          {/* Google Sign-In */}
          {/* <GoogleSignIn redirectTo={from}></GoogleSignIn> */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
