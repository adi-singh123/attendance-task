import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AttendanceButton from "../components/AttendanceButton";
import TaskCard from "../components/TaskCard";
import CreateTask from "../components/CreateTask";
import api from "../api/axios";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Failed to load tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-6 max-w-5xl mx-auto">
        <AttendanceButton />

        <CreateTask onTaskCreated={fetchTasks} />

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">My Tasks</h2>

          {tasks.length === 0 ? (
            <p className="text-sm text-gray-500">No tasks available</p>
          ) : (
            <div className="space-y-3">
              {tasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onUpdate={fetchTasks}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
