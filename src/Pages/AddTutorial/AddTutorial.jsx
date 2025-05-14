import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UseAuth from "../../Hooks/UseAuth";
const AddTutorial = () => {
  const { user } = UseAuth(); // Get logged-in user details
  const [tutorial, setTutorial] = useState({
    // name: user?.name || "",
    email: user?.email || "",
    image: "",
    language: "",
    price: "",
    description: "",
    reviews: 0, // Default review count
  });

  const [name, setName] = useState("User");

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://learnify-server-blush.vercel.app/user-profile?email=${user.email}`
      )
        .then((response) => response.json())
        .then((data) => {
          setName(data.name || "User");
        })
        .catch((error) => toast.error("Error fetching user profile:", error));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form submitted:", tutorial); // Replace with actual API call

    fetch("https://learnify-server-blush.vercel.app/tutorials", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tutorial),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold text-primary text-center mb-6">
        Post a New Tutorial
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-base-100 p-6 rounded-lg shadow-lg"
      >
        {/* Name Field */}
        <div className="form-control mb-4">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="input input-bordered"
            readOnly
          />
        </div>

        {/* Email Field */}
        <div className="form-control mb-4">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            value={tutorial.email}
            onChange={handleChange}
            className="input input-bordered"
            readOnly
          />
        </div>

        {/* Image URL Field */}
        <div className="form-control mb-4">
          <label className="label">Image URL</label>
          <input
            type="url"
            name="image"
            value={tutorial.image}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Language Field */}
        <div className="form-control mb-4">
          <label className="label">Language</label>
          <input
            type="text"
            name="language"
            value={tutorial.language}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Enter language"
            required
          />
        </div>

        {/* Price Field */}
        <div className="form-control mb-4">
          <label className="label">Price (USD/hour)</label>
          <input
            type="number"
            name="price"
            value={tutorial.price}
            onChange={handleChange}
            className="input input-bordered"
            min="1"
            required
          />
        </div>

        {/* Description Field */}
        <div className="form-control mb-4">
          <label className="label">Description</label>
          <textarea
            name="description"
            value={tutorial.description}
            onChange={handleChange}
            className="textarea textarea-bordered"
            rows="4"
            placeholder="Enter description"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Submit Tutorial
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTutorial;
