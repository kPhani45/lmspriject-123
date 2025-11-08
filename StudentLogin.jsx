import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Demo validation
    if (email && password) {
      navigate("/student-dashboard");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-[90%] sm:w-[400px] text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Student Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-white/20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg bg-white/20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-5 text-sm text-gray-200">
          Back to{" "}
          <a href="/" className="underline text-yellow-300 hover:text-yellow-400">
            Home
          </a>
        </p>
      </div>
    </div>
  );
}
