import { getLocalStorageItem } from "../utils/localStorageHelper";

/**
 * Action creator for adding a todo.
 * @param {Object} todo - The todo item to add.
 * @returns {null} Dispatches ADD_TODO action.
 */
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

/**
 * Action creator for removing a todo.
 * @param {Object} todo - The todo item to add.
 * @returns {null} Dispatches REMOVE_TODO action.
 */
export const RemoveTodoAction = (todo) => (dispatch) => {
  if (!todo) return;

  dispatch({
    type: "REMOVE_TODO",
    payload: todo,
  });
};

/**
 * Action creator for editing a todo.
 * @param {Object} todo - The todo item to add.
 * @returns {null} Dispatches EDIT_TODO action.
 */
export const EditTodoAction = (todo) => (dispatch) => {
  if (!todo) return;

  dispatch({
    type: "EDIT_TODO",
    payload: todo,
  });
};

/**
 * Load Todo data whenever app starts up
 * @returns {null} Dispatches LOAD_TODOS action.
 */
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
