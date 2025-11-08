import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center w-[90%] sm:w-[400px]">
        <h1 className="text-4xl font-extrabold mb-6">Welcome to <span className="text-yellow-300">LMS</span></h1>
        <p className="text-sm text-gray-200 mb-8">Choose your portal to continue</p>

        <div className="flex flex-col gap-4">
          <Link
            to="/student-login"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg"
          >
            Student Login
          </Link>
          <Link
            to="/teacher-login"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg"
          >
            Teacher Login
          </Link>
        </div>
      </div>

      <footer className="mt-10 text-xs text-gray-200 opacity-70">
        Created by @RMP  
      </footer>
    </div>
  );
}
