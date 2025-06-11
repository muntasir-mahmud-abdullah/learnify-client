import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthContext/AuthContext";
import GoogleSignIn from "../Shared/GoogleSignIn";

export default function Register() {
  const { createUser } = useContext(AuthContext);
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // fetch total registered users
  useEffect(() => {
    fetch("https://learnify-server-blush.vercel.app/users/count")
      .then((res) => res.json())
      .then(({ count }) => setUserCount(count))
      .catch(() => toast.error("Unable to load user count"));
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const { name, email, password, photoURL } = Object.fromEntries(new FormData(e.target));

    try {
      // create in Firebase
      await createUser(email, password);

      // persist to our backend
      const res = await fetch("https://learnify-server-blush.vercel.app/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, photoURL }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Registration failed");
      setSuccess("🎉 Registered successfully!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-base-100 rounded-2xl shadow-xl max-w-md w-full p-8"
      >
        <h1 className="text-3xl font-extrabold text-center text-primary mb-6">
          Create Your Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="input input-bordered w-full"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="input input-bordered w-full"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="input input-bordered w-full"
          />
          <input
            name="photoURL"
            type="url"
            placeholder="Photo URL (optional)"
            className="input input-bordered w-full"
          />
          <button
                      initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            type="submit"
            disabled={loading}
            className={`px-4 py-2 bg-primary hover:bg-primary text-white text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 w-full ${
              loading && "loading"
            }`}
          >
            {loading ? "Registering…" : "Register Now"}
          </button>
        </form>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center text-red-500"
          >
            {error}
          </motion.p>
        )}
        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center text-green-500"
          >
            {success}
          </motion.p>
        )}

        <GoogleSignIn />

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-primary hover:underline font-semibold"
          >
            Sign In
          </a>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 text-gray-600 dark:text-gray-400"
      >
        Total Learners Enrolled:
        <span className="font-bold text-primary">{userCount}</span>
      </motion.div>
    </div>
  );
}
