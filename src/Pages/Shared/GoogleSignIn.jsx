// src/Pages/Shared/GoogleSignIn.jsx
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";

const GoogleSignIn = ({ redirectTo = "/" }) => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      // Step 1: Sign in using Firebase Google Provider
      const result = await signInWithGoogle();
      const email = result.user.email;

      // Step 2: Exchange email for a JWT cookie
      await axios.post(
        "https://learnify-server-blush.vercel.app/jwt",
        { email },
        { withCredentials: true }
      );

      toast.success("Signed in with Google!");

      // Step 3: Navigate to intended route
      navigate(redirectTo, { replace: true });
    } catch (err) {
      console.error("Google Sign-In error:", err);
      toast.error("Google Sign-In failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 w-full">
      <div className="divider text-sm text-gray-400">Or continue with</div>
      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 dark:bg-base-100 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg shadow-sm transition duration-300 font-medium"
      >
        {loading ? (
          <span className="loading loading-spinner loading-sm text-primary"></span>
        ) : (
          <>
            <FcGoogle size={20} />
            <span className="text-gray-900 dark:text-gray-300" >Sign in with Google</span>
          </>
        )}
      </button>
    </div>
  );
};

export default GoogleSignIn;
