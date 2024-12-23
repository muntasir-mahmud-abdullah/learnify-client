import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";

const MyTutors = () => {
  const { user } = UseAuth();
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/booked-tutor?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setTutors(data));
  }, [user.email]);
  return (
    <h1>{tutors.length}</h1>
  )
};

export default MyTutors;
