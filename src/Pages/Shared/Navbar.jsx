import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [profileImage, setProfileImage] = useState(
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  ); // Default profile image
  const [name, setName] = useState("User");
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://learnify-server-blush.vercel.app/user-profile?email=${user.email}`,
        {
          method: "GET",
          credentials: "include",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProfileImage(data.photoURL || profileImage);
          setName(data.name || "User");
        })
        .catch((error) => console.error("Error fetching user profile:", error));
    }
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      console.log("Successful sign out");
      alert("You have been signed out successfully.");
    } catch (error) {
      console.error("Error signing out:", error);
      alert("Sign-out failed. Please try again.");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/findTutors">Find Tutors</NavLink>
      </li>
      <li>
        <NavLink to="/myBookedTutors">My Tutors</NavLink>
      </li>
      <li>
        <NavLink to="/addTutorial">Add Tutorial</NavLink>
      </li>
      <li>
        <NavLink to="/myTutorial">My Tutorials</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-3xl">Learnify</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <label className="swap swap-rotate" aria-label="Toggle Theme">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <svg
            className="swap-on fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64 17.36A9 9 0 0012 21a9 9 0 100-18 9 9 0 00-6.36 15.36z" />
          </svg>
          <svg
            className="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zm5.66 3.34a1 1 0 01.71 1.71l-1.41 1.41a1 1 0 01-1.41-1.41l1.41-1.41a1 1 0 01.7-.3zM21 11a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM17.66 17.66a1 1 0 01-1.41 0l-1.41-1.41a1 1 0 011.41-1.41l1.41 1.41a1 1 0 010 1.41zM12 18a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM6.34 17.66a1 1 0 010-1.41l1.41-1.41a1 1 0 011.41 1.41l-1.41 1.41a1 1 0 01-1.41 0zM4 13H3a1 1 0 010-2h1a1 1 0 010 2zm1.34-5.66a1 1 0 01-.3-.7 1 1 0 01.3-.71L6.45 5.23a1 1 0 011.41 1.41L6.45 8.05a1 1 0 01-1.41 0z" />
          </svg>
        </label>
        {user ? (
          <>
            <div className="w-10 rounded-full">
              <img
                alt="User Profile"
                src={profileImage}
                className="w-10 h-10 rounded-full"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={name}
              />
              <ReactTooltip id="my-tooltip" />
            </div>
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/signin">
              <button className="btn">Sign In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
