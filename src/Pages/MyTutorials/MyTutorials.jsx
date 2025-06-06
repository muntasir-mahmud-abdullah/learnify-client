import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import UseAuth from "../../Hooks/UseAuth";
const MyTutorials = () => {
  const { user, setTutorials, tutorials } = UseAuth();
  const [loading, setLoading] = useState(true);
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
        .catch((error) => {
          // console.error("Error fetching user profile:", error);
          toast.error("Error fetching user profile");
        });
    }
  }, [user]);

  // Fetch tutorials created by the logged-in user
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://learnify-server-blush.vercel.app/my-tutorials?email=${user.email}`,
      {
        credentials: "include", // Ensures cookies are sent with the request
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch tutorials");
        }
        return res.json();
      })
      .then((data) => {
        setTutorials(data);
        setLoading(false);
      })
      .catch((error) => {
        // console.error(error);
        toast.error("error setting tutorial");
        setLoading(false);
      });
  }, [user.email, setTutorials]);

  // Handle delete functionality
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this tutorial?"
    );
    if (!confirmDelete) return; // Cancel deletion if the user doesn't confirm

    fetch(`https://learnify-server-blush.vercel.app/tutorials/${id}`, {
      method: "DELETE",
      credentials: "include", // Include cookies for authentication
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          const remainingTutorials = tutorials.filter((t) => t._id !== id);
          setTutorials(remainingTutorials);
        }
      })
      .catch((error) => {
        console.error("Error deleting tutorial:", error);
        toast("There was an issue deleting the tutorial. Please try again.");
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="loader">Loading tutorials...</div>
      </div>
    );
  }

  if (tutorials.length === 0) {
    return (
      <div className="text-center">
        <p>No tutorials posted yet. Start by posting your first tutorial!</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl text-center mb-6">
        My Posted Tutorials: {tutorials.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Picture</th>
              <th>Language</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Table Rows */}
            {tutorials.map((tutorial, index) => (
              <tr key={tutorial._id}>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>
                  <img
                    src={tutorial.image}
                    alt={tutorial.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td>{tutorial.language}</td>
                <td>{tutorial.description}</td>
                <td>${tutorial.price}</td>
                <td>
                  <div className="flex gap-2">
                    <Link to={`/updateTutorial/${tutorial._id}`}>
                      <button className="btn btn-primary btn-sm">Update</button>
                    </Link>
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => handleDelete(tutorial._id)}
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
