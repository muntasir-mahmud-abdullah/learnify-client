// src/Components/FindTutors.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FindTutors = () => {
  const { category } = useParams();
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://learnify-server-blush.vercel.app/tutorials/category/${category}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(setTutors)
      .catch(() => toast.error("Error fetching tutors"))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          {category.charAt(0).toUpperCase() + category.slice(1)} Tutors
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">
          Browse our vetted {category} tutors and start learning today.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin h-10 w-10 border-4 border-t-4 border-primary rounded-full"></div>
        </div>
      ) : (
        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto px-4"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          {tutors.map((tutor) => (
            <motion.div
              key={tutor._id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {tutor.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {tutor.language} &bull; ${tutor.price}/hr
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {tutor.reviews || 0} reviews
                </p>
                <Link to={`/tutorials/${tutor._id}`}>
                  <button className="mt-3 w-full text-sm font-medium py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition">
                    Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default FindTutors;
