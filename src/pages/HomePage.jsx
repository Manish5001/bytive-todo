import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../features/tasks/tasksSlice';
import TaskList from '../components/TaskList';

const HomePage = () => {
  const dispatch = useDispatch();
  const { tasks, status } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">To-Do List</h1>
      {status === 'loading' ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <TaskList tasks={tasks} />
      )}
    </div>
  );
};

export default HomePage;
