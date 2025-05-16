import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [profileImage, setProfileImage] = useState(
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  );
  const [name, setName] = useState("User");
  const [menuOpen, setMenuOpen] = useState(false);

  // Fetch user profile
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://learnify-server-blush.vercel.app/user-profile?email=${encodeURIComponent(
          user.email
        )}`,
        { credentials: "include" }
      )
        .then((res) => res.json())
        .then((data) => {
          setProfileImage(data.photoURL || profileImage);
          setName(data.name || "User");
        })
        .catch(() => {
          toast.error("Error fetching user profile");
        });
    }
  }, [user?.email]);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      toast("You have been signed out successfully.");
    } catch {
      toast.error("Sign-out failed. Please try again.");
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

  const links = [
    { to: "/", label: "Home" },
    { to: "/findTutors", label: "Find Tutors" },
    { to: "/myBookedTutors", label: "My Tutors" },
    { to: "/addTutorial", label: "Add Tutorial" },
    { to: "/myTutorial", label: "My Tutorials" },
  ];

  return (
    <div className="navbar mx-auto sm:px-24 bg-base-100 sticky top-0 z-50">
      <div className="navbar-start flex-1">
        <NavLink to="/" className="text-3xl pl-2 sm:pl-10 font-bold">
          Learnify
        </NavLink>
      </div>

      {/* Hamburger + Mobile Menu */}
      <div className="navbar-center lg:hidden">
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="btn btn-ghost px-2 mr-2 sm:mr-0 sm:px-4"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* User Actions */}
      <div className="navbar-end mr-2 sm:mr-0 flex items-center gap-4">
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

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-base-100 shadow-md">
          <ul className="menu menu-vertical p-4 space-y-2">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="block"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
