import { setLocalStorageItem } from "../utils/localStorageHelper";

export const TodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      setLocalStorageItem("todos", JSON.stringify({ todos: [...state.todos, action.payload] }));
      return { todos: [...state.todos, action.payload] };

    case "REMOVE_TODO":
      const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
      console.log("%c  filteredTodos:", "color: #0e93e0;background: #aaefe5;", filteredTodos);
      setLocalStorageItem("todos", JSON.stringify({ todos: filteredTodos }));
      return { todos: filteredTodos };

    case "LOAD_TODOS":
      return { todos: action.payload.todos };

    default:
      return state;
  }
};
