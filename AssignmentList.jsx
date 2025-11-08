import { useState } from "react";

export default function AssignmentList() {
  const [assignments] = useState([
    { id: 1, title: "Math Homework", dueDate: "2025-11-10" },
    { id: 2, title: "Science Project", dueDate: "2025-11-15" },
  ]);

  const [file, setFile] = useState(null);

  const handleUpload = (assignmentTitle) => {
    if (file) {
      alert(`File uploaded for "${assignmentTitle}"`);
      setFile(null);
    } else {
      alert("Please choose a file first.");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {assignments.map((a) => (
        <div
          key={a.id}
          className="bg-white/10 backdrop-blur-lg p-5 rounded-xl shadow-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        >
          <div>
            <h3 className="text-xl font-semibold">{a.title}</h3>
            <p className="text-sm text-gray-200">Due: {a.dueDate}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="bg-white/20 text-sm text-white p-2 rounded-md"
            />
            <button
              onClick={() => handleUpload(a.title)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Upload
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
