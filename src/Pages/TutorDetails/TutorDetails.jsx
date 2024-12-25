import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const TutorDetails = () => {
  const tutor = useLoaderData();
  const { _id,name, image, language, description, price, reviews } = tutor;

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold text-primary text-center mb-6">
        Tutor Details
      </h2>

      <div className="card bg-base-100 shadow-xl">
        {/* Image Section */}
        <figure>
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </figure>

        {/* Details Section */}
        <div className="card-body">
          <h3 className="card-title text-3xl text-primary">{name}</h3>
          <p className="text-lg text-gray-600 mt-2">
            <strong>Language:</strong> {language}
          </p>
          <p className="text-gray-700 mt-4">{description}</p>

          <div className="mt-4">
            <p className="text-lg text-gray-800">
              <strong>Price:</strong>{" "}
              <span className="text-primary">${price}/hour</span>
            </p>
            <p className="text-lg text-gray-800">
              <strong>Reviews:</strong> {reviews}
            </p>
          </div>

          {/* Action Section */}
          <div className="card-actions justify-end mt-6">
            <Link><button className="btn btn-primary">Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
