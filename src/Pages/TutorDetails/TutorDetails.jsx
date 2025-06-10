import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import UseAuth from "../../Hooks/UseAuth";
import { motion } from "framer-motion";
const TutorDetails = () => {
  const { user } = UseAuth();
  const tutor = useLoaderData();
  const { _id, name, image, language, description, price, reviews = 0 } = tutor;

  const handleBookedTutor = () => {
    const bookedTutor = {
      tutor_id: _id,
      user_email: user.email,
      name,
      image,
      language,
      price,
    };

    fetch("https://learnify-server-blush.vercel.app/booked-tutors", {
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
          toast.success("Tutor booked successfully! ✅");
        } else {
          toast.error(data.message || "Failed to book tutor. ❌");
        }
      })
      .catch(() => {
        toast.error("Error booking tutor");
      });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">Tutor Profile</h2>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">{name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4"><strong>Language:</strong> {language}</p>
            <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed mb-6">{description}</p>

            <div className="space-y-2 text-gray-800 dark:text-gray-100">
              <p><strong>Price:</strong> <span className="text-primary font-semibold">${price}/hour</span></p>
              <p><strong>Reviews:</strong> {reviews}</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6">
            <motion.button
                        initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
              onClick={handleBookedTutor}
              className="w-full md:w-auto px-4 py-2 bg-primary hover:bg-primary-dark text-white text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50"
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
