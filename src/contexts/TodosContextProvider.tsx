import {
  createContext, Dispatch, FC, ReactNode, SetStateAction, useEffect, useState,
} from 'react';
import { Todo } from '../types/Todo';
import { FilterStatus, TodosError } from '../constants';
import { noop } from '../utils';

export interface ITodosContext {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  tempTodo: Todo | null;
  setTempTodo: Dispatch<SetStateAction<Todo | null>>;
  filter: FilterStatus;
  handleFilter: (filterStatus: FilterStatus) => VoidFunction;
  errorMessage: TodosError;
  handleErrorMessage: (message: TodosError) => VoidFunction;
}
export const TodosContext = createContext<ITodosContext>({
  todos: [],
  setTodos: noop,
  tempTodo: null,
  setTempTodo: noop,
  filter: FilterStatus.ALL,
  handleFilter: () => noop,
  errorMessage: TodosError.NONE,
  handleErrorMessage: () => noop,
});

interface Props {
  children: ReactNode;
}

const TodosContextProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [tempTodo, setTempTodo] = useState<Todo | null>(null);
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.ALL);
  const [errorMessage, setErrorMessage] = useState<TodosError>(TodosError.NONE);

  const handleErrorMessage = (message: TodosError) => () => {
    setErrorMessage(message);
  };

  const handleFilter = (filterStatus: FilterStatus) => () => {
    setFilter(filterStatus);
  };

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage(TodosError.NONE);
      }, 3000);
    }
  }, [errorMessage]);

  return (
    <TodosContext.Provider value={{
      todos,
      setTodos,
      tempTodo,
      setTempTodo,
      filter,
      handleFilter,
      errorMessage,
      handleErrorMessage,
    }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
