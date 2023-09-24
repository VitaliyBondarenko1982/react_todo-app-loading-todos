import useTodosContext from '../../contexts/useTodosContext';
import TodoItem from '../TodoItem';
import { getFilteredTodos } from '../../utils';

const TodoList = () => {
  const { todos, filter } = useTodosContext();

  const filteredTodos = getFilteredTodos(todos, filter);

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {filteredTodos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </section>
  );
};

export default TodoList;
