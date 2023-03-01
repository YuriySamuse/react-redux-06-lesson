import { statusFilters } from './constants';
import { combineReducers } from 'redux';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

// Використовуємо initialState як значення стану за умовчанням
export const tasksReducer = (state = tasksInitialState, action) => {
  // Редюсер розрізняє екшени за значенням властивості type
  switch (action.type) {
    // Залежно від типу екшену виконуватиметься різна логіка
    case 'task/addTask': {
      return {
        ...state,
        tasks: [...state.tasks, action.playoad],
      };
    }
    case 'tasks/deleteTask':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.playload),
      };
    case 'tasks/toggleCompleted':
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id !== action.playload) {
            return task;
          }
          return { ...task, completed: !task.completed };
        }),
      };

    default:
      // Кожен редюсер отримує всі екшени, відправлені в стор.
      // Якщо редюсер не повинен обробляти якийсь тип екшену,
      // необхідно повернути наявний стан без змін.
      return state;
  }
};

const filtersInitialSTate = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialSTate, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.playoad,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
