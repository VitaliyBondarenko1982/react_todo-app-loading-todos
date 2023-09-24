import { Todo } from '../types/Todo';

const getCompletedTodos = (todos: Todo[]) => {
  return todos.filter(todo => todo.completed);
};

export default getCompletedTodos;
