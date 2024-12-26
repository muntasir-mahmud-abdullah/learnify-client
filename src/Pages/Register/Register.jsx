import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import GoogleSignIn from "../Shared/GoogleSignIn";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [userCount, setUserCount] = useState(0);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    console.log({ name, email, password, photoURL });

    // Create user using Firebase
    createUser(email, password)
      .then((result) => {
        console.log("User Created:", result.user);

        // Send user details to backend
        fetch("https://learnify-server-blush.vercel.app/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, photoURL }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.message);
          })
          .catch((error) => console.error("Error registering user:", error));
      })
      .catch((error) => console.error("Error creating user:", error.message));
  };

  // Fetch registered user count
  useEffect(() => {
    fetch("https://learnify-server-blush.vercel.app/users/count")
      .then((res) => res.json())
      .then((data) => {
        setUserCount(data.count);
      })
      .catch((error) => console.error("Error fetching user count:", error));
  }, []);

  return (
    <div className="hero bg-base-200 p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 p-10 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl text-center font-bold">Register Now!</h1>
          <form onSubmit={handleRegister} className="card-body">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photoURL"
                type="url"
                placeholder="Photo URL (Optional)"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <GoogleSignIn></GoogleSignIn>
        </div>
      </div>

      {/* Registered User Count */}
      <div className="text-center mt-6">
        <p className="text-lg">Total Registered Users: {userCount}</p>
      </div>
    </div>
  );
};

export default Register;
