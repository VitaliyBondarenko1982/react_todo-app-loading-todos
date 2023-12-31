import cn from 'classnames';
import useTodosContext from '../../contexts/useTodosContext';
import { FilterStatus } from '../../constants';
import { getActiveTodos, getCompletedTodos } from '../../utils';

const filterLinks = [
  {
    href: '#/',
    dataCy: 'FilterLinkAll',
    status: FilterStatus.ALL,
  },
  {
    href: '#/active',
    dataCy: 'FilterLinkActive',
    status: FilterStatus.ACTIVE,
  },
  {
    href: '#/completed',
    dataCy: 'FilterLinkCompleted',
    status: FilterStatus.COMPLETED,
  },
];

const Footer = () => {
  const { todos, filter, handleFilter } = useTodosContext();

  const activeTodos = getActiveTodos(todos);
  const completedTodos = getCompletedTodos(todos);

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${activeTodos.length} items left`}
      </span>

      <nav className="filter" data-cy="Filter">
        {filterLinks.map(({ href, status, dataCy }) => (
          <a
            href={href}
            className={cn('filter__link', { selected: status === filter })}
            data-cy={dataCy}
            key={href}
            onClick={handleFilter(status)}
          >
            {status}
          </a>
        ))}
      </nav>

      {!!completedTodos.length && (
        <button
          type="button"
          className="todoapp__clear-completed"
          data-cy="ClearCompletedButton"
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
