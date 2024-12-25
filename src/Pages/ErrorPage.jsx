import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-md">
        <img
          src="https://i.ibb.co.com/XDWZXxn/warning-8908707-1280.png"
          alt="Error 404"
          className="w-full h-auto object-cover rounded-t-lg mb-4"
        />
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist. It might have been moved or
          deleted.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline btn-primary"
          >
            Go Back
          </button>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
