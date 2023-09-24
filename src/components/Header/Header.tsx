import { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContextProvider';

const Header = () => {
  const { todos } = useContext(TodosContext);

  return (
    <header className="todoapp__header">
      {!!todos.length && (
        <button
          type="button"
          className="todoapp__toggle-all active"
          data-cy="ToggleAllButton"
          aria-label="delete"
        />
      )}

      <form>
        <input
          data-cy="NewTodoField"
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    </header>
  );
};

export default Header;
