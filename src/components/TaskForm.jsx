import React, { useState } from 'react';

const TaskForm = ({ onSubmit, initialTask = { title: '', completed: false } }) => {
  const [title, setTitle] = useState(initialTask.title);
  const [completed, setCompleted] = useState(initialTask.completed);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, completed });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded-md shadow-sm">
      <div className="mb-4">
        <label className="block mb-1 text-gray-700 font-medium">Task Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter task title"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-gray-700 font-medium">Status</label>
        <select
          value={completed}
          onChange={(e) => setCompleted(e.target.value === 'true')}
          className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
