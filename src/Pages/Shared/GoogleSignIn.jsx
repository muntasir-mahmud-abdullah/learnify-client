import React, { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import axios from "axios";

const GoogleSignIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithGoogle();
      const { email } = result.user;

      // Generate token
      const response = await axios.post(
        "https://learnify-server-blush.vercel.app/signIn",
        {
          email,
        }
      );

      if (response.status === 200) {
        console.log("Token generated:", response.data.token);
        alert("Sign-in successful!");
        // You can store the token securely here if needed
      } else {
        console.error("Failed to generate token");
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      alert("Google Sign-In failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-4">
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleSignIn}
        className={`btn ${loading ? "btn-disabled" : ""}`}
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in with Google"}
      </button>
    </div>
  );
};

export default GoogleSignIn;
