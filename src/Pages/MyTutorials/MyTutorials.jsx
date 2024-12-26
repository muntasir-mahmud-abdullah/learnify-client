import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";

const MyTutorials = () => {
  const { user, setTutorials, tutorials } = UseAuth();
  const [loading, setLoading] = useState(true);


  // Fetch tutorials created by the logged-in user
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/tutorials?email=${user.email}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch tutorials");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setTutorials(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [user.email, setTutorials]);

  // Handle delete functionality
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/tutorials/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          const remainingTutorials = tutorials.filter((t) => t._id !== id);
          setTutorials(remainingTutorials);
        }
      });
  };

  if (loading) {
    return <div className="text-center">Loading tutorials...</div>;
  }

  if (tutorials.length === 0) {
    return <div className="text-center">No tutorials posted yet.</div>;
  }

  return (
    <div>
      <h2 className="text-3xl text-center mb-6">My Posted Tutorials: {tutorials.length}</h2>
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
                <td>{tutorial.name}</td>
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
