import { getLocalStorageItem } from "../utils/localStorageHelper";

export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  if (!todo) return;

  const user = JSON.parse(getLocalStorageItem("user"));

  const hasTodo = todos.some((i) => i?.todo === todo && i?.owner === user?.userName);

  if (!hasTodo && todo !== "") {
    dispatch({
      type: "ADD_TODO",
      payload: { id: todo, todo, owner: user?.userName },
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
  const user = JSON.parse(getLocalStorageItem("user"));

  const todosData = JSON.parse(storedTodos);
  if (storedTodos && todosData?.todos?.length > 0 && user?.userName) {
    dispatch({
      type: "LOAD_TODOS",
      payload: {
        todos: todosData?.todos?.filter((td) => td.owner === user?.userName),
      },
    });
  }
};
