import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import SignIn from "./components/SignInPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import { removeLocalStorageItem, setLocalStorageItem } from "./utils/localStorageHelper";
import Header from "./components/Header";

function App() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSignIn = (user) => {
    if (!user) return;
    setLocalStorageItem("user", JSON.stringify(user));
  };

  const handleSignOut = () => {
    navigate("/signIn");
    removeLocalStorageItem("user");
  };

  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            element={
              <>
                <Header onSignOut={handleSignOut} />
                <p>React Redux Todo App</p>
                <form onSubmit={handleSubmitTodo}>
                  <input placeholder="Type a task" value={todo} onChange={(e) => setTodo(e.target.value)} />
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
              </>
            }
            path="/"
            exact
          />
          <Route path="*" element={<>Page not found.</>} />
        </Route>
        <Route element={<SignIn onSignIn={handleSignIn} />} path="/signIn" exact />
        <Route path="*" element={<>Page not found.</>} />
        <Route path="*" element={<Navigate to="/signIn" />} />
      </Routes>
    </div>
  );
}

export default App;
