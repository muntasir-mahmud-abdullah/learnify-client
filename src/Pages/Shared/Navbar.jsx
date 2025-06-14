import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import AuthContext from "../../Context/AuthContext/AuthContext";
// import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/outline";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  );
  const [name, setName] = useState("User");

  // Fetch user profile info
// … inside Navbar component …

useEffect(() => {
  if (!user?.email) return;

  const fetchProfile = async (retry = false) => {
    try {
      const res = await fetch(
        `https://learnify-server-blush.vercel.app/user-profile?email=${encodeURIComponent(
          user.email
        )}`,
        { credentials: "include" }
      );

      if (res.status === 404) {
        // maybe backend hasn’t created the record yet—retry once
        if (!retry) setTimeout(() => fetchProfile(true), 1000);
        return;
      }

      if (!res.ok) {
        toast.error("Error fetching profile");
        return;
      }

      const data = await res.json();
      setProfileImage(data.photoURL || profileImage);
      setName(data.name || "User");
    } catch (err) {
      // network/server error
      toast.error("Error fetching profile");
      console.warn("Profile fetch failed:", err);
    }
  };

  fetchProfile();
}, [user?.email]);

  // On first render, apply the saved theme class
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Theme toggle handler
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    // localStorage.setItem("theme", next);
  };

  // Sign out handler
  const handleSignOut = async () => {
    try {
      await signOutUser();
      toast.success("Signed out");
    } catch {
      toast.error("Sign-out failed");
    }
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/findTutors", label: "Find Tutors" },
    { to: "/myBookedTutors", label: "My Tutors" },
    { to: "/addTutorial", label: "Add Tutorial" },
    { to: "/myTutorial", label: "My Tutorials" },
  ];

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="container sm:mx-auto flex items-center justify-between h-16 sm:px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          <img
            className="sm:w-48 w-36"
            src="https://i.ibb.co/2YyMKFbt/logo-transparent.png"
            alt=""
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative px-3 py-2 text-gray-500 font-medium bbotom ${
                  isActive
                    ? "after:w-full text-gray-700 dark:text-gray-300"
                    : " dark:text-gray-400"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 ml:2 sm:ml-auto rounded-full hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <MoonIcon className="w-6 h-6 text-gray-700" />
            ) : (
              <SunIcon className="w-6 h-6 text-white" />
            )}
          </button>

          {user ? (
            <>
              {/* Profile Dropdown */}
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar focus:outline-none"
                >
                  <div className="w-10 rounded-full">
                    <img
                      src={profileImage}
                      alt={name}
                      data-tooltip-id="profile-tooltip"
                      data-tooltip-content={name}
                    />
                    <ReactTooltip id="profile-tooltip" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {/* <li>
                    <span className="block px-4 py-2 text-sm">{name}</span>
                  </li> */}
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 hover:bg-base-200"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <NavLink
                to="/register"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-semibold"
              >
                Register
              </NavLink>
              <NavLink
                to="/signin"
                className="p-1 text-center sm:px-3 sm:py-2 bg-primary hover:bg-primary text-white text-xs sm:text-sm font-semibold rounded-lg sm:rounded-full shadow-sm transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </NavLink>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden p-2 rounded-md hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <aside
        className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-base-100 shadow-lg transform transition-transform z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col mt-16">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-base hover:bg-base-200"
            >
              {label}
            </NavLink>
          ))}
          {user && (
            <button
              onClick={() => {
                handleSignOut();
                setMenuOpen(false);
              }}
              className="mt-4 px-4 py-3 text-base text-left hover:bg-base-200"
            >
              Sign Out
            </button>
          )}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
