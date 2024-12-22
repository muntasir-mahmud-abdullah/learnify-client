import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import GoogleSignIn from "../Shared/GoogleSignIn";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password).then((result) => {
      console.log(result.user);
    });
  };

  return (
    <div className="hero bg-base-200 p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 p-10 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl text-center font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <GoogleSignIn></GoogleSignIn>
        </div>
      </div>
    </div>
  );
};

export default Register;
