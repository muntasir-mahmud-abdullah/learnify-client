import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UseAuth from "../../Hooks/UseAuth";
import { motion } from "framer-motion";
const MyBookedTutors = () => {
  const { user } = UseAuth();
  const [bookedTutors, setBookedTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setBookedTutors([]);
      setLoading(false);
      return;
    }

    fetch(
      `https://learnify-server-blush.vercel.app/booked-tutors?user_email=${user.email}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch booked tutors");
        return res.json();
      })
      .then(setBookedTutors)
      .catch(() => toast.error("Error fetching booked tutors"))
      .finally(() => setLoading(false));
  }, [user?.email]);

  const handleReview = (id) => {
    fetch(
      `https://learnify-server-blush.vercel.app/booked-tutors/${id}/review`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to increment review count");
        return res.json();
      })
      .then(() => {
        setBookedTutors((prev) =>
          prev.map((t) =>
            t._id === id ? { ...t, reviews: (t.reviews || 0) + 1 } : t
          )
        );
      })
      .catch(() => toast.error("Error incrementing review count"));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <div className="animate-spin h-14 w-14 border-t-4 border-primary rounded-full"></div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-10">
        My Booked Tutors
      </h2>

      {bookedTutors.length === 0 ? (
        <p className="text-center text-lg text-gray-500">
          No tutors booked yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookedTutors.map((tutor) => (
            <div
              key={tutor._id}
              className="bg-base-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-primary">
                  {tutor.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Language:{" "}
                  <span className="font-medium">{tutor.language}</span>
                </p>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                  Price:{" "}
                  <span className="font-medium">${tutor.price}/hour</span>
                </p>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                  Reviews:{" "}
                  <span className="font-medium">{tutor.reviews || 0}</span>
                </p>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  onClick={() => handleReview(tutor._id)}
                  className="mt-4 w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50"
                >
                  Leave a Review
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyBookedTutors;
