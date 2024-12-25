import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";

const MyTutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const { user } = UseAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/tutorials?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setTutorials(data));
  }, [user.email]);

  const handleUpdate = (e) => {};
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
                  <button onClick={handleUpdate}>Update</button>
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
