import React from "react";
import { Link } from "react-router-dom";

export default function Login(){
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-6">Welcome to LMS</h1>
      <div className="flex justify-center gap-4">
        <Link to="/student-login" className="px-6 py-3 bg-blue-600 text-white rounded">Student Login</Link>
        <Link to="/teacher-login" className="px-6 py-3 bg-green-600 text-white rounded">Teacher Login</Link>
      </div>
    </div>
  );
}
