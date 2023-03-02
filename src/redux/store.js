import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './TaskSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
