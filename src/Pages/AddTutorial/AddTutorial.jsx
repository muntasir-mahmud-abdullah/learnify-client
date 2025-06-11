import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UseAuth from "../../Hooks/UseAuth";
const AddTutorial = () => {
  const { user } = UseAuth();
  const [name, setName] = useState("User");

  const [tutorial, setTutorial] = useState({
    email: user?.email || "",
    image: "",
    language: "",
    price: "",
    description: "",
    reviews: 0,
  });

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://learnify-server-blush.vercel.app/user-profile?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setName(data.name || "User"))
        .catch(() => toast.error("Failed to load profile info"));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTutorial((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("https://learnify-server-blush.vercel.app/tutorials", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tutorial),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Tutorial submitted successfully! 🎉");
          setTutorial({
            email: user?.email || "",
            image: "",
            language: "",
            price: "",
            description: "",
            reviews: 0,
          });
        } else {
          toast.error("Submission failed. Please try again.");
        }
      })
      .catch(() => toast.error("Network error. Please try again later."));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Share Your Expertise: Add a Tutorial
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-xl p-8 rounded-lg space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              value={name}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={tutorial.email}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div>
          <label className="label font-medium text-gray-700 dark:text-gray-200">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            value={tutorial.image}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter a valid image URL"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label font-medium text-gray-700 dark:text-gray-200">
              Language
            </label>
            <input
              type="text"
              name="language"
              value={tutorial.language}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="e.g., Spanish, French"
              required
            />
          </div>

          <div>
            <label className="label font-medium text-gray-700 dark:text-gray-200">
              Price (USD/hour)
            </label>
            <input
              type="number"
              name="price"
              value={tutorial.price}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="e.g., 20"
              min="1"
              required
            />
          </div>
        </div>

        <div>
          <label className="label font-medium text-gray-700 dark:text-gray-200">
            Description
          </label>
          <textarea
            name="description"
            value={tutorial.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Briefly describe what you offer and your teaching style"
            required
          />
        </div>

        <div className="text-center pt-4">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            type="submit"
            className="w-full md:w-1/3 px-4 py-2 bg-primary hover:bg-primary-dark text-white text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            Submit Tutorial
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default AddTutorial;
