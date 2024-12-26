import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Languages from "./languages";
import BestTutors from "../Tutors/BestTutors";

const Home = () => {
  const [userCount, setUserCount] = useState(0);
  const [tutorsCount, setTutorsCount] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/reviews/count")
      .then((res) => res.json())
      .then((data) => {
        setTotalReviews(data.totalReviews);
      })
      .catch((error) => console.error("Error fetching total reviews:", error));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/users/count")
      .then((res) => res.json())
      .then((data) => {
        setUserCount(data.count);
      })
      .catch((error) => console.error("Error fetching user count:", error));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/tutors/count")
      .then((res) => res.json())
      .then((data) => {
        setTutorsCount(data.count);
      })
      .catch((error) => console.error("Error fetching user count:", error));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Languages></Languages>
      <p className="text-2xl font-semibold">
        Total Registered Users:{" "}
        <span className="text-primary">{userCount}</span>
      </p>
      <p className="text-2xl font-semibold">
        Total Tutors: <span className="text-primary">{tutorsCount}</span>
      </p>
      <p className="text-2xl font-semibold">
            Total Reviews: <span className="text-primary">{totalReviews}</span>
          </p>
    </div>
  );
};

export default Home;
