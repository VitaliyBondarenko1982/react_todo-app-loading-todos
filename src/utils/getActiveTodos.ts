import { Todo } from '../types/Todo';

const getActiveTodos = (todos: Todo[]) => {
  return todos.filter(todo => !todo.completed);
};

export default getActiveTodos;
