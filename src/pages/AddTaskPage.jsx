import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import TaskForm from '../components/TaskForm';

const AddTaskPage = () => {
  const dispatch = useDispatch();

  const handleAddTask = (task) => {
    dispatch(addTask({ ...task, id: Date.now() }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Task</h1>
      <TaskForm onSubmit={handleAddTask} />
    </div>
  );
};

export default AddTaskPage;
