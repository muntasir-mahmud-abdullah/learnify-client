import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UseAuth from "../../Hooks/UseAuth";
const MyBookedTutors = () => {
  const { user } = UseAuth();
  const [bookedTutors, setBookedTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch booked tutors for the logged-in user
  // Client-side: Fetch booked tutors
  useEffect(() => {
    if (!user.email) {
      setBookedTutors([]);
      setLoading(false);
      return;
    }

    fetch(`http://localhost:5000/booked-tutors?user_email=${user.email}`, {
      method: "GET",
      credentials: "include", // Include cookies for authentication
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch booked tutors");
        }
        return res.json();
      })
      .then((data) => {
        setBookedTutors(data);
      })
      .catch((error) => {
        // console.error("Error fetching booked tutors:", error);
        toast.error("Error fetching booked tutors:");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user.email]);

  // Handle Review Increment
  const handleReview = (id) => {
    fetch(`http://localhost:5000/booked-tutors/${id}/review`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to increment review count");
        }
        return res.json();
      })
      .then(() => {
        // Update the review count optimistically
        setBookedTutors((prevTutors) =>
          prevTutors.map((tutor) =>
            tutor._id === id
              ? { ...tutor, reviews: (tutor.reviews || 0) + 1 }
              : tutor
          )
        );
      })
      .catch((error) =>
        // console.error("Error incrementing review count:", error);
        toast.error("Error incrementing review count")
      );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-center mb-6 font-bold text-gray-800">
        My Booked Tutors
      </h2>

      {/* Display message if no tutors are booked */}
      {bookedTutors.length === 0 ? (
        <p className="text-center col-span-full text-lg text-gray-500">
          No tutors booked yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookedTutors.map((tutor) => (
            <div
              key={tutor._id}
              className="card shadow-md border border-gray-200 rounded-lg p-4"
            >
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">{tutor.name}</h3>
              <p className="text-gray-600">Language: {tutor.language}</p>
              <p className="text-gray-600">Price: ${tutor.price}/hour</p>
              <p className="text-gray-600">Reviews: {tutor.reviews || 0}</p>

              {/* Review Button */}
              <button
                className="btn btn-primary mt-4"
                onClick={() => handleReview(tutor._id)}
              >
                Review
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookedTutors;
