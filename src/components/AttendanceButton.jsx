import { useState } from "react";
import api from "../api/axios";

const AttendanceButton = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const markAttendance = async () => {
    setLoading(true);
    setMessage("");

    try {
      const res = await api.post("/attendance/mark");
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error marking attendance");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">Attendance</h2>
      <button
        onClick={markAttendance}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Marking..." : "Mark Attendance"}
      </button>
      {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
    </div>
  );
};

export default AttendanceButton;
