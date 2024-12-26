import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import GoogleSignIn from "../Shared/GoogleSignIn";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    console.log({ name, email, password, photoURL });

    createUser(email, password)
      .then((result) => {
        console.log("User Created:", result.user);

        // Optionally: Update profile with name and photo URL if needed
        // updateProfile(auth.currentUser, {
        //   displayName: name,
        //   photoURL: photoURL,
        // }).then(() => console.log("Profile updated"));
      })
      .catch((error) => console.error("Error creating user:", error.message));
  };

  return (
    <div className="hero bg-base-200 p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 p-10 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl text-center font-bold">Register Now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>

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
            </div>

            {/* Photo URL Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photoURL"
                type="url"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          {/* Google Sign-In */}
          <GoogleSignIn></GoogleSignIn>
        </div>
      </div>
    </div>
  );
};

export default Register;
