import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetching tasks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data.slice(0, 10); // Limit to 10 tasks
});

const initialState = {
  tasks: [],
  status: 'idle',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    editTask(state, action) {
      const { id, title, completed } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.title = title;
        existingTask.completed = completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
