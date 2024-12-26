import React, { useEffect, useState } from "react";
import BestTutors from "../Tutors/BestTutors";

const Statistics = () => {
  const [userCount, setUserCount] = useState(0);
  const [tutorsCount, setTutorsCount] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const languageCount = 9; // Hardcoded language count for now

  useEffect(() => {
    fetch("https://learnify-server-blush.vercel.app/reviews/count")
      .then((res) => res.json())
      .then((data) => {
        setTotalReviews(data.totalReviews);
      })
      .catch((error) => console.error("Error fetching total reviews:", error));
  }, []);

  useEffect(() => {
    fetch("https://learnify-server-blush.vercel.app/users/count")
      .then((res) => res.json())
      .then((data) => {
        setUserCount(data.count);
      })
      .catch((error) => console.error("Error fetching user count:", error));
  }, []);

  useEffect(() => {
    fetch("https://learnify-server-blush.vercel.app/tutors/count")
      .then((res) => res.json())
      .then((data) => {
        setTutorsCount(data.count);
      })
      .catch((error) => console.error("Error fetching tutors count:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Statistics Overview
      </h2>

      {/* Stats Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Tutors Count Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center border border-gray-200">
          <p className="text-lg font-semibold text-gray-600">Total Tutors</p>
          <p className="text-4xl font-bold text-primary mt-2">{tutorsCount}</p>
        </div>

        {/* Reviews Count Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center border border-gray-200">
          <p className="text-lg font-semibold text-gray-600">Total Reviews</p>
          <p className="text-4xl font-bold text-primary mt-2">{totalReviews}</p>
        </div>

        {/* Languages Count Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center border border-gray-200">
          <p className="text-lg font-semibold text-gray-600">Total Languages</p>
          <p className="text-4xl font-bold text-primary mt-2">
            {languageCount}
          </p>
        </div>

        {/* Users Count Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center border border-gray-200">
          <p className="text-lg font-semibold text-gray-600">
            Total Registered Users
          </p>
          <p className="text-4xl font-bold text-primary mt-2">{userCount}</p>
        </div>
      </div>

      {/* Best Tutors Section */}
      <div className="mt-12">
        <BestTutors />
      </div>
    </div>
  );
};

export default Statistics;
