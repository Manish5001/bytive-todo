import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => (
  <div className="mt-6">
    {tasks.map((task) => (
      <div
        key={task.id}
        className="p-4 border rounded-md mb-4 shadow-sm bg-white hover:shadow-md transition-shadow"
      >
        <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
        <p className="text-sm text-gray-600">
          Status: {task.completed ? 'Completed' : 'Pending'}
        </p>
        <Link
          to={`/edit/${task.id}`}
          className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          Edit Task
        </Link>
      </div>
    ))}
  </div>
);

export default TaskList;
