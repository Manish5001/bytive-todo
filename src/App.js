import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-500 p-4 shadow-md">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="text-white text-lg font-semibold hover:underline">
            Home
          </Link>
          <Link to="/add" className="text-white text-lg font-semibold hover:underline">
            Add Task
          </Link>
        </div>
      </nav>
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddTaskPage />} />
          <Route path="/edit/:id" element={<EditTaskPage />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
