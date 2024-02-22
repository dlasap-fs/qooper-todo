import { getLocalStorageItem } from "../utils/localStorageHelper";

export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  if (!todo) return;

  const hasTodo = todos.some((i) => i?.todo === todo);

  if (!hasTodo && todo !== "") {
    dispatch({
      type: "ADD_TODO",
      payload: { id: todo, todo },
    });
  }
};

export const RemoveTodoAction = (todo) => (dispatch) => {
  if (!todo) return;

  dispatch({
    type: "REMOVE_TODO",
    payload: todo,
  });
};

export const LoadTodosAction = () => (dispatch) => {
  const storedTodos = getLocalStorageItem("todos");
  const todosData = JSON.parse(storedTodos);
  if (storedTodos && todosData?.todos?.length > 0) {
    dispatch({
      type: "LOAD_TODOS",
      payload: todosData,
    });
  }
};
