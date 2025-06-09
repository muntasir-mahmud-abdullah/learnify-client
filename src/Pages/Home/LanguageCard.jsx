import React from "react";
import { Link } from "react-router-dom";

const LanguageCard = ({ language }) => {
  const { _id, name, logo } = language;

  return (
    <Link
      to={`/find-tutors/${name.toLowerCase()}`}
      className="block cursor-default transform transition-transform duration-300 hover:scale-105 w-full max-w-xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md dark:shadow-xl overflow-hidden">
        <div className="flex items-center p-6 space-x-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt={name}
              className="h-16 w-16 rounded-lg bg-gray-100 dark:bg-gray-700 p-2 object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="flex-1 truncate min-w-0 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {name}
          </h3>

          {/* Arrow */}
          <div>
            <button className="p-3 bg-primary text-white rounded-full shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LanguageCard;
