import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const GoogleSignIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div className="m-4">
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn">
        Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
