import React from "react";
import { render, screen } from "@testing-library/react";
import Tasks from "./Tasks";

test("renders the Tasks component", () => {
  render(<Tasks />);
  const componentElement = screen.getByTestId("tasksComponent");
  expect(componentElement).toBeInTheDocument();
});

test("renders the component with correct Data", () => {
  render(
    <Tasks
      handleSubmitTodo={jest.fn()}
      handleRemoveTodo={jest.fn()}
      handleEditTodo={jest.fn()}
      setTodo={jest.fn()}
      todo=""
      data={[
        {
          id: 1,
          todo: "todo-1",
          owner: "test-me",
        },
        {
          id: 2,
          todo: "todo-2",
          owner: "test-you",
        },
      ]}
    />
  );
  const firstToDo = screen.getByText("todo-1");
  const secondToDo = screen.getByText("todo-2");

  expect(firstToDo).toBeInTheDocument();
  expect(secondToDo).toBeInTheDocument();
});
