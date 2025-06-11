import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
const UpdateTutorials = () => {
  const tutorial = useLoaderData(); // Load tutorial data from the router
  const { _id, name, image, language, description, price } = tutorial;

  const [updatedTutorial, setUpdatedTutorial] = useState({
    name: name || "",
    image: image || "",
    language: language || "",
    description: description || "",
    price: price || "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTutorial({ ...updatedTutorial, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://learnify-server-blush.vercel.app/tutorials/${_id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTutorial),
        }
      );

      if (response.ok) {
        toast("Tutorial updated successfully!");
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Failed to update tutorial");
      }
    } catch (error) {
      // console.error("Error updating tutorial:", error);
      toast.error("Error updating tutorial");
      setErrorMessage("An error occurred while updating the tutorial.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold text-primary text-center mb-6">
        Update Tutorial: {name}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg"
      >
        {/* Name Field */}
        <div className="form-control mb-4">
          <label className="label font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={updatedTutorial.name}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Enter Name"
            required
          />
        </div>

        {/* Image URL Field */}
        <div className="form-control mb-4">
          <label className="label font-semibold">Image URL</label>
          <input
            type="url"
            name="image"
            value={updatedTutorial.image}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Enter Image URL"
            required
          />
        </div>

        {/* Language Field */}
        <div className="form-control mb-4">
          <label className="label font-semibold">Language</label>
          <input
            type="text"
            name="language"
            value={updatedTutorial.language}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Enter Language"
            required
          />
        </div>

        {/* Price Field */}
        <div className="form-control mb-4">
          <label className="label font-semibold">Price (USD/hour)</label>
          <input
            type="number"
            name="price"
            value={updatedTutorial.price}
            onChange={handleChange}
            className="input input-bordered"
            min="1"
            required
          />
        </div>

        {/* Description Field */}
        <div className="form-control mb-4">
          <label className="label font-semibold">Description</label>
          <textarea
            name="description"
            value={updatedTutorial.description}
            onChange={handleChange}
            className="textarea textarea-bordered"
            rows="4"
            placeholder="Enter Description"
            required
          />
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
              </div>
            ) : (
              "Update Tutorial"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTutorials;
