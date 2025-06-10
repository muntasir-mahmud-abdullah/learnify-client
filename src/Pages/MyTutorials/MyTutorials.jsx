import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import UseAuth from "../../Hooks/UseAuth";
import {motion} from "framer-motion";
const MyTutorials = () => {
  const { user, setTutorials, tutorials } = UseAuth();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("User");

  useEffect(() => {
    if (user?.email) {
      fetch(`https://learnify-server-blush.vercel.app/user-profile?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setName(data.name || "User"))
        .catch(() => toast.error("Failed to fetch user profile"));
    }
  }, [user]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://learnify-server-blush.vercel.app/my-tutorials?email=${user.email}`, {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tutorials");
        return res.json();
      })
      .then((data) => {
        setTutorials(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Unable to load tutorials");
        setLoading(false);
      });
  }, [user.email, setTutorials]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this tutorial?");
    if (!confirmDelete) return;

    fetch(`https://learnify-server-blush.vercel.app/tutorials/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          const remaining = tutorials.filter((t) => t._id !== id);
          setTutorials(remaining);
          toast.success("Tutorial deleted successfully!");
        } else {
          toast.error("Failed to delete tutorial.");
        }
      })
      .catch(() => toast.error("There was an issue deleting the tutorial."));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    );
  }

  if (tutorials.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">No Tutorials Yet</h2>
        <p className="text-gray-500">You haven't posted any tutorials. Ready to share your expertise?</p>
        <Link to="/addTutorial">
                    <motion.button  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }} type="submit" className="mt-6 w-max px-4 py-2 bg-primary hover:bg-primary-dark text-white text-md font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50">
            Add Your First Tutorial
          </motion.button>
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        My Tutorials ({tutorials.length})
      </h2>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200 text-base font-semibold text-gray-700">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Thumbnail</th>
              <th>Language</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map((tutorial, index) => (
              <tr key={tutorial._id}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>
                  <img
                    src={tutorial.image}
                    alt={tutorial.language}
                    className="w-16 h-16 object-cover rounded shadow"
                  />
                </td>
                <td>{tutorial.language}</td>
                <td className="max-w-xs truncate">{tutorial.description}</td>
                <td>${tutorial.price}</td>
                <td>
                  <div className="flex flex-col md:flex-row gap-2">
                    <Link to={`/updateTutorial/${tutorial._id}`}>
                      <button className="btn btn-sm btn-outline btn-primary">Edit</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(tutorial._id)}
                      className="btn btn-sm btn-outline btn-error"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorials;
