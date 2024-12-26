import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import axios from "axios";

const GoogleSignIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
      //generate token
      // const {data} = await axios.post("https://learnify-server-blush.vercel.app/signIn",{email})
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
