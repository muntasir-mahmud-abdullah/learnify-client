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
    const result = await signInWithGoogle();
    const { displayName: name, email, photoURL } = result.user;

    // console.log("Submitting register:", { name, email, photoURL });

    // Try register, but ignore if 400 (user exists)
    try {
      const reg = await fetch(
        "https://learnify-server-blush.vercel.app/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, photoURL }),
        }
      );
      if (!reg.ok && reg.status !== 400) {
        // only treat non‑400 as fatal
        throw new Error(`Register failed (${reg.status})`);
      }
    } catch (regErr) {
      console.warn("Register endpoint:", regErr);
    }

    // Always request JWT
    await axios.post(
      "https://learnify-server-blush.vercel.app/jwt",
      { email },
      { withCredentials: true }
    );

    toast.success("Signed in with Google!");
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
