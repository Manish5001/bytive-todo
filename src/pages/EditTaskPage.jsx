import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editTask } from '../features/tasks/tasksSlice';
import TaskForm from '../components/TaskForm';

const EditTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks.tasks.find((task) => task.id === parseInt(id)));

  const handleEditTask = (updatedTask) => {
    dispatch(editTask({ ...task, ...updatedTask }));
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Task</h1>
      {task && <TaskForm initialTask={task} onSubmit={handleEditTask} />}
    </div>
  );
};

export default EditTaskPage;
