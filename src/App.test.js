import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/TodoStore";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

test("Renders Application", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const loginHeader = screen.getByText(/Login to your account/i);
  expect(loginHeader).toBeInTheDocument();
});

test("Login displays error messages when trying to login without sign in data", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );

  const signInButton = screen.getByText("LOGIN");

  userEvent.click(signInButton);

  const userNameErrorText = screen.getByText("User name is required");
  const firstNameErrorText = screen.getByText("First name is required");

  expect(signInButton).toBeInTheDocument();
  expect(userNameErrorText).toBeInTheDocument();
  expect(firstNameErrorText).toBeInTheDocument();
});
