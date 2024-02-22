import { getLocalStorageItem, setLocalStorageItem } from "../utils/localStorageHelper";

export const TodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const prevToDos = JSON.parse(getLocalStorageItem("todos"));
      setLocalStorageItem("todos", JSON.stringify({ todos: [...prevToDos.todos, action.payload] }));
      return { todos: [...state.todos, action.payload] };

    case "REMOVE_TODO":
      const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
      setLocalStorageItem("todos", JSON.stringify({ todos: filteredTodos }));
      return { todos: filteredTodos };

    case "LOAD_TODOS":
      return { todos: action.payload.todos };

    default:
      return state;
  }
};
