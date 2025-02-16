import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const TutorDetails = () => {
  const { user } = UseAuth();
  const tutor = useLoaderData();
  const { _id, name, image, language, description, price, reviews } = tutor;
  console.log(tutor);
  const handleBookedTutor = () => {
    const bookedTutor = {
      tutor_id: _id,
      user_email: user.email,
      name,
      image,
      language,
      price,
    };

    fetch("http://localhost:5000/booked-tutors", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookedTutor),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Tutor booked successfully! ✅");
        } else {
          alert(data.message || "Failed to book tutor. ❌");
        }
      })
      .catch((error) => console.error("Error booking tutor:", error));
  };

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
            <button onClick={handleBookedTutor} className="btn btn-primary">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
