import api from "../api/axios";

const TaskCard = ({ task, onUpdate }) => {
  const updateStatus = async (status) => {
    try {
      await api.put(`/tasks/${task._id}`, { status });
      onUpdate();
    } catch (error) {
      console.error("Failed to update task");
    }
  };

  return (
    <div className="border rounded p-4 bg-white flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
      </div>

      <select
        value={task.status}
        onChange={(e) => updateStatus(e.target.value)}
        className="border rounded px-2 py-1 text-sm"
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default TaskCard;
