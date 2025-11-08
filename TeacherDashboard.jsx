import React, { useState } from "react";
import AssignmentList from "../components/AssignmentList";

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState("");

  const addCourse = (e) => {
    e.preventDefault();
    if (newCourse.trim() === "") return;

    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    setNewCourse("");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="text-center mt-10">
            <h1 className="text-3xl font-bold text-purple-700">Welcome Praveen kumar sir </h1>
            <p className="text-gray-600 mt-3">
              Manage your courses and review student assignments here.
            </p>
          </div>
        );

      case "courses":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Add New Course</h2>
            <form onSubmit={addCourse} className="flex space-x-3">
              <input
                type="text"
                value={newCourse}
                onChange={(e) => setNewCourse(e.target.value)}
                placeholder="Enter course name"
                className="flex-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-purple-300"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
              >
                Add
              </button>
            </form>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Current Courses:</h3>
              {courses.length === 0 ? (
                <p className="text-gray-500">No courses added yet.</p>
              ) : (
                <ul className="space-y-3">
                  {courses.map((course, index) => (
                    <li key={index} className="bg-gray-100 p-3 rounded-lg shadow">
                      {course}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );

      case "assignments":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">
              Submitted Assignments
            </h2>
            <AssignmentList />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-400 text-white">
      <nav className="bg-white shadow-md p-4 flex justify-around text-gray-700 font-semibold">
        <button onClick={() => setActiveTab("home")} className="hover:text-purple-600">
          Home
        </button>
        <button onClick={() => setActiveTab("courses")} className="hover:text-blue-600">
          Add Courses
        </button>
        <button onClick={() => setActiveTab("assignments")} className="hover:text-pink-600">
          View Assignments
        </button>
      </nav>

      <div className="bg-white text-gray-800 mx-10 mt-8 p-6 rounded-2xl shadow-lg">
        {renderContent()}
      </div>
    </div>
  );
};

export default TeacherDashboard;
