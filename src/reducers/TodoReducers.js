import { getLocalStorageItem, setLocalStorageItem } from "../utils/localStorageHelper";

export const TodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const prevToDos = JSON.parse(getLocalStorageItem("todos"));
      setLocalStorageItem("todos", JSON.stringify({ todos: [...[...(prevToDos?.todos ?? [])], action.payload] }));
      return { todos: [...state.todos, action.payload] };

    case "EDIT_TODO":
      const userDetails = JSON.parse(getLocalStorageItem("user"));

      const prevEditTodos = JSON.parse(getLocalStorageItem("todos"));
      const editedLocalStorageTodos = prevEditTodos?.todos?.map((todo) => {
        if (todo?.owner !== userDetails.userName) return todo;
        if (todo?.id === action.payload?.id) {
          return {
            ...todo,
            todo: action.payload?.todo,
          };
        }
        return todo;
      });
      const newEditedArray = state.todos.map((todo) => {
        if (todo?.id === action.payload?.id) {
          return {
            ...todo,
            todo: action.payload?.todo,
          };
        }
        return todo;
      });

      setLocalStorageItem("todos", JSON.stringify({ todos: [...(editedLocalStorageTodos ?? [])] }));

      return { todos: newEditedArray };

    case "REMOVE_TODO":
      const user = JSON.parse(getLocalStorageItem("user"));
      const localStorageTodos = JSON.parse(getLocalStorageItem("todos"));
      const filteredLocalStorageTodos = localStorageTodos?.todos?.filter((td) => {
        if (td?.owner !== user.userName) return true;
        if (td?.id !== action.payload?.id) return true;
        return false;
      });

      const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload.id && user.userName === action.payload?.owner);

      setLocalStorageItem("todos", JSON.stringify({ todos: [...(filteredLocalStorageTodos ?? [])] }));
      return { todos: filteredTodos };

    case "LOAD_TODOS":
      return { todos: action.payload.todos };

    default:
      return state;
  }
};
