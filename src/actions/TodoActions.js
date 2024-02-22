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
  const storedTodos = localStorage.getItem("todos");
  console.log("%c  storedTodos:", "color: #0e93e0;background: #aaefe5;", storedTodos);
  // if (storedTodos) {
  //   const todos = JSON.parse(storedTodos);
  //   dispatch({
  //     type: "LOAD_TODOS",
  //     payload: todos,
  //   });
  // }
};
