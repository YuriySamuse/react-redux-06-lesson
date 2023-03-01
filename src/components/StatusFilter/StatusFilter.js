// Імпортуємо хук
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from 'redux/constants';
import { getStatusFilter } from 'redux/selectors';

import css from './StatusFilter.module.css';
import { setStatusFilter } from 'redux/actions';

export const StatusFilter = () => {
  const dispach = useDispatch();
  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispach(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
