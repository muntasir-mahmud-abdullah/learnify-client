import React from "react";
import { Link } from "react-router-dom";

const LanguageCard = ({ language }) => {
  const { _id, name, logo } = language;
  console.log(name);
  
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
      <div className="card-body flex items-center justify-between p-6">
        {/* Language Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt={name}
            className="h-14 w-14 object-contain rounded-lg border border-gray-200 p-2"
          />
          <h3 className="text-xl font-semibold text-primary">{name}</h3>
        </div>
        {/* Right Arrow Icon */}
        <Link to={`/find-tutors/${name.toLowerCase()}`}>
          <button className="btn btn-circle btn-sm btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LanguageCard;
