import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const FindTutors = () => {
  const { category } = useParams(); // Get the category from the URL
  const [tutors, setTutors] = useState([]);
  // console.log(category);

  // Fetch tutors based on the category
  useEffect(() => {
    fetch(
      `https://learnify-server-blush.vercel.app/tutorials/category/${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
      })
      .catch((error) => toast.error("Error fetching tutors:", error));
  }, [category]);

  return (
    <div>
      <h2 className="text-3xl text-center mb-6">
        Tutors for {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
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
            <p className="text-gray-600">Reviews: {tutor.reviews || 0}</p>
            <Link to={`/tutorials/${tutor._id}`}>
              <button className="btn btn-primary mt-4">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTutors;
