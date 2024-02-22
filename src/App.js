import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, EditTodoAction, LoadTodosAction, RemoveTodoAction } from "./actions/TodoActions";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import SignIn from "./components/SignInPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import { removeLocalStorageItem, setLocalStorageItem } from "./utils/localStorageHelper";
import Header from "./components/Header";
import store from "./store/TodoStore";
import Tasks from "./components/Tasks";

/**
 * App Base Component for To Do App
 *
 * @component
 * returns Base App with Routes with Sign In and Default Page for Task
 */
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

  const handleEditTodo = (e, todo) => {
    e.preventDefault();
    dispatch(EditTodoAction(todo));
  };

  const handleSignIn = (user) => {
    if (!user) return;
    setLocalStorageItem("user", JSON.stringify(user));
    store.dispatch(LoadTodosAction());
  };

  const handleSignOut = () => {
    navigate("/signIn", { replace: true });
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
                <Tasks
                  handleSubmitTodo={handleSubmitTodo}
                  data={todosList}
                  handleRemoveTodo={handleRemoveTodo}
                  todo={todo}
                  setTodo={setTodo}
                  handleEditTodo={handleEditTodo}
                />
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
