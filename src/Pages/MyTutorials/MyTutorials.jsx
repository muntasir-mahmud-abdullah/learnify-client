import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";

const MyTutorials = () => {
  const { user,setTutorials,tutorials } = UseAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/tutorials?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setTutorials(data));
  }, [user.email]);
  // console.log(tutorials)
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/tutorials/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = tutorials.filter(singtu=>singtu._id != id);
        setTutorials(remaining);
      });
  };
  const handleUpdate = (id) => {
    console.log(id);
  };
  return (
    <div>
      <h2 className="text-3xl">my posted tutorials: {tutorials.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Picture</th>
              <th>Language</th>
              <th>Description</th>
              <th>Price</th>
              <th>Reviews</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tutorials.map((tutorial, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{tutorial.name}</td>
                <td>{tutorial.image}</td>
                <td>{tutorial.language}</td>
                <td>{tutorial.description}</td>
                <td>{tutorial.price}</td>
                <td></td>
                <td>
                  <Link to={`/updateTutorial/${tutorial._id}`}>
                    <button
                      className="btn"
                      onClick={() => handleUpdate(tutorial._id)}
                    >
                      Update
                    </button>
                  </Link>
                  <button
                    className="btn"
                    onClick={() => handleDelete(tutorial._id)}
                  >
                    Delete
                  </button>
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
