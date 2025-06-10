import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const BestTutorCard = ({ tutor }) => {
  const { _id, name, image, language, price, description, reviews = 0 } = tutor;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover p-4"
      />

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-primary mb-1">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
          {description}
        </p>

        {/* Details */}
        <div className="text-sm text-gray-700 dark:text-gray-400 space-y-1">
          <p><span className="font-medium text-gray-600 dark:text-gray-300">Language:</span> {language}</p>
          <p><span className="font-medium text-gray-600 dark:text-gray-300">Price:</span> ${price}/hour</p>
          <p><span className="font-medium text-gray-600 dark:text-gray-300">Reviews:</span> {reviews}</p>
        </div>

        {/* Button */}
        <div className="mt-4 flex justify-end">
          <Link to={`/tutorials/${_id}`}>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-md font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            View Details
          </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestTutorCard;
