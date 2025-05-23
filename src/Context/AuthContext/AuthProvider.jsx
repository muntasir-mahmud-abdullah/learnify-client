import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../../firebase/firebase.init";
import AuthContext from "./AuthContext";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tutorials, setTutorials] = useState([]);
  const [tutors, setTutors] = useState([]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser);
        const { data } = await axios.post(
          `https://learnify-server-blush.vercel.app/jwt`,
          {
            email: currentUser?.email,
            name: currentUser?.displayName,
          },
          { withCredentials: true }
        );
        // console.log(data);
      } else {
        setUser(currentUser);
        const { data } = await axios.get(
          `https://learnify-server-blush.vercel.app/logout`,
          {
            withCredentials: true,
          }
        );
      }
      setLoading(false);
      // console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // const [tutor,setTutor] = useState([]);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    tutorials,
    setTutorials,
    tutors,
    setTutors,
    // setTutor,
    // tutor,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
