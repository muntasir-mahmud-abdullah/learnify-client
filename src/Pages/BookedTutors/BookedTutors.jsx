import React from "react";
import { useParams } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const BookedTutors = () => {
  // const tutor = useLoaderData();
  const { user } = UseAuth();
  const { id } = useParams();
  console.log(id, user);
  const bookedTutor = {
    tutor_id: id,
    user_email: user.email,
  };
  fetch("http://localhost:5000/booked-tutors", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookedTutor),
  });

  return (
    <div>
      <h2>Booked Tutors</h2>
    </div>
  );
};

export default BookedTutors;
