import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthContext/AuthContext";
const GoogleSignIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithGoogle();
      const { email } = result.user;
      console.log(result.user);
      // Generate token
axios.post(
  "https://learnify-server-blush.vercel.app/jwt",
  { email:email },
  { withCredentials: true }
)

      // if (response.status === 200) {
      //   // console.log("Token generated:", response.data.token);
      //   toast("Sign-in successful!");
      //   // You can store the token securely here if needed
      // } else {
      //   // console.error("Failed to generate token");
      //   // alert("Something went wrong, please try again.");
      //   toast.error("Failed to generate token");
      // }
    } catch (error) {
      console.error("Error during Google Sign-In:", error);

      toast.error("Google Sign-In failed. Please try again.");
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
