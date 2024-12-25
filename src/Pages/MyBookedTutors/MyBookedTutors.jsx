import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";

const MyBookedTutors = () => {
  const { user } = UseAuth();
  const [bookedTutors, setBookedTutors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/booked-tutors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookedTutors(data);
      });
  }, [user.email]);

  // Fetch booked tutors
//   useEffect(() => {
//     fetch(`http://localhost:5000/booked-tutors?email=${user.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setBookedTutors(data);
//       })
//       .catch((error) => console.error("Error fetching booked tutors:", error));
//   }, [user.email]);

  return (
    <div>
      <h2 className="text-3xl text-center mb-6">My Booked Tutors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookedTutors.length === 0 ? (
          <p className="text-center col-span-full">No tutors booked yet.</p>
        ) : (
          bookedTutors.map((tutor) => (
            <div
              key={tutor._id}
              className="card shadow-md border border-gray-200 rounded-lg p-4"
            >
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">{tutor.name}</h3>
              <p className="text-gray-600">Language: {tutor.language}</p>
              <p className="text-gray-600">Price: ${tutor.price}/hour</p>
              <button className="btn btn-primary mt-4">Write Review</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookedTutors;
