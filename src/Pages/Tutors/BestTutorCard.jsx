import React from "react";
import { Link } from "react-router-dom";

const BestTutorCard = ({ tutor }) => {
  const { _id, name, email, image, language, price, description, reviews } =
    tutor;

  return (
    <div className="card w-full bg-base-100 shadow-lg hover:shadow-2xl transition-shadow">
      <figure>
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{name}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="mt-3">
          <p className="font-semibold">
            <span className="text-gray-600">Language:</span> {language}
          </p>
          <p className="font-semibold">
            <span className="text-gray-600">Price:</span> ${price}/hour
          </p>
          <p className="font-semibold">
            <span className="text-gray-600">Reviews:</span> {reviews}
          </p>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={`/tutorials/${_id}`}>
            <button className="btn btn-primary btn-sm">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestTutorCard;
