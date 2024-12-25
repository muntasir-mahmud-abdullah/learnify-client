import React, { useEffect, useState } from "react";
import BestTutorCard from "./BestTutorCard";
import UseAuth from "../../Hooks/UseAuth";

const BestTutors = () => {
  const { tutors, setTutors } = UseAuth();
  useEffect(() => {
    fetch("http://localhost:5000/tutorials")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTutors(data);
      });
  }, []);
  console.log(tutors);
  //   useEffect(() => {
  //     console.log(tutorials);
  //   }, [tutorials]);

  return (
    <div>
      <h1>{tutors.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tutors.map((tutor, index) => (
          <BestTutorCard key={index} tutor={tutor}></BestTutorCard>
        ))}
      </div>
    </div>
  );
};

export default BestTutors;
