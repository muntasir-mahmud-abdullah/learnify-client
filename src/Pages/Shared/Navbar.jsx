import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import AuthContext from "../../Context/AuthContext/AuthContext";
// import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/outline";
import { Bars3Icon,XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  );
  const [name, setName] = useState("User");

  // Fetch user profile info
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
        .catch(() => toast.error("Error fetching profile"));
    }
  }, [user?.email]);

  // Theme toggle handler
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
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
      <div className="max-w-7xl sm:mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          Learnify
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative px-3 py-2 text-base font-medium bbotom ${
                   isActive
                     ? "after:w-full"
                     : "text-gray-600"
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
    <SunIcon className="w-6 h-6 text-[#f44336]" />
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
                  <li>
                    <span className="block px-4 py-2 text-sm">{name}</span>
                  </li>
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
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Register
              </NavLink>
              <NavLink
                to="/signin"
                className="btn btn-primary btn-sm flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </NavLink>
            </>
          )}

          {/* Mobile Menu Button */}
<button
  onClick={() => setMenuOpen(o => !o)}
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
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
