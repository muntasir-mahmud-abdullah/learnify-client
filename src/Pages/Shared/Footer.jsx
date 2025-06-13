import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-100 w-full dark:bg-[#1d232a] text-gray-800 dark:text-gray-200 transition-colors">
    <div className="md:max-w-6xl mx-auto px-2 sm:px-4 py-12 flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
      {/* Brand */}
      <div>
        {/* <h2 className="text-2xl font-bold text-primary">Learnify</h2> */}
        <Link to="/" className="text-2xl cursor-default font-bold text-primary">
          <img
            className="sm:w-32 w-48"
            src="https://i.ibb.co/XZZJgcww/logo-transparent.png"
            alt=""
          />
        </Link>
        <p className="mt-4 text-sm w-78 md:w-96">
          Connecting learners with the best tutors worldwide. Empowering
          education for everyone.
        </p>
        <div className="flex mt-6 space-x-4">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            )
          )}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          {[
            "Home",
            "Find Tutors",
            "Add Tutorial",
            "My Tutorial",
            "My Booked Tutors",
          ].map((text) => (
            <li key={text}>
              <Link
                to={
                  text === "Home"
                    ? "/"
                    : `/${text.replace(/\s+/g, "").toLowerCase()}`
                }
                className="hover:text-primary transition"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Contact */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="mailto:support@learnify.com"
              className="hover:text-primary transition"
            >
              support@learnify.com
            </a>
          </li>
          <li>
            <a href="tel:+123456789" className="hover:text-primary transition">
              +1 (234) 567-890
            </a>
          </li>
          <li>123 Tutor Lane, Education City</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 pb-2">
      <p className="text-center text-xs">
        © {new Date().getFullYear()} Learnify. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
