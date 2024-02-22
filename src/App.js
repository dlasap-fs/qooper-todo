import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";

function App() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const TodoState = useSelector((state) => state.Todo);

  const { todos: todosList } = TodoState;

  const clearField = () => setTodo("");

  const handleRemoveTodo = (todoItem) => {
    dispatch(RemoveTodoAction(todoItem));
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
    clearField();
  };

  return (
    <div className="App">
      <p>React Redux Todo App</p>
      <form onSubmit={handleSubmitTodo}>
        <input placeholder="Enter a To-Do" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add To Do</button>
      </form>

      <ul className="allTodo">
        {todosList &&
          todosList.map((td) => {
            return (
              <li key={td.id}>
                <span>{td.todo}</span>
                <button onClick={() => handleRemoveTodo(td)}>Delete</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
