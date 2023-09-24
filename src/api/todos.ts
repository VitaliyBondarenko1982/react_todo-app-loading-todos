import { Todo } from '../types/Todo';
import { client } from '../utils';

const USER_ID = 10389;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

// Add more methods here
