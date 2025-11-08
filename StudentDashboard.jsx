import React, { useState } from "react";
import AssignmentUpload from "../components/AssignmentUpload";
import AssignmentList from "../components/AssignmentList";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="text-center mt-10">
            <h1 className="text-3xl font-bold text-purple-700">Welcome Student 👋</h1>
            <p className="text-gray-600 mt-3">Explore your courses and submit assignments here.</p>
          </div>
        );
      case "courses":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Your Courses</h2>
            {/* Dummy course list — replace with fetched data later */}
            <ul className="space-y-3">
              <li className="bg-gray-100 p-4 rounded-lg shadow">Web Development</li>
              <li className="bg-gray-100 p-4 rounded-lg shadow">Data Science</li>
              <li className="bg-gray-100 p-4 rounded-lg shadow">AI Fundamentals</li>
            </ul>
          </div>
        );
      case "assignments":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">Submit Assignment</h2>
            <AssignmentUpload />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-400 text-white">
      <nav className="bg-white shadow-md p-4 flex justify-around text-gray-700 font-semibold">
        <button onClick={() => setActiveTab("home")} className="hover:text-purple-600">Home</button>
        <button onClick={() => setActiveTab("courses")} className="hover:text-blue-600">Courses</button>
        <button onClick={() => setActiveTab("assignments")} className="hover:text-pink-600">Submit Assignment</button>
      </nav>

      <div className="bg-white text-gray-800 mx-10 mt-8 p-6 rounded-2xl shadow-lg">
        {renderContent()}
      </div>
    </div>
  );
};

export default StudentDashboard;
