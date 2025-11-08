import { useState } from "react";

export default function AssignmentUpload() {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && dueDate && file) {
      alert(`Assignment "${title}" uploaded successfully!`);
      setTitle("");
      setDueDate("");
      setFile(null);
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-[90%] sm:w-[500px] mx-auto flex flex-col gap-5"
    >
      <input
        type="text"
        placeholder="Assignment Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
      />
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg"
      >
        Upload Assignment
      </button>
    </form>
  );
}
