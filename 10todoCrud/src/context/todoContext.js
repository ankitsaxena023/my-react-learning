/* eslint-disable no-unused-vars */

import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todoArrItem: [
    {
      id: 1,
      todo: "Title",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
