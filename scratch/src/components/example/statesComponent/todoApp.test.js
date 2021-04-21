import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import TodoApp from "./todoApp";
import TodoList from "./todoList";

describe("Todo App", () => {
  let props = {
    items: [
      {
        id: "1",
        text: "New Item 1",
      },
      {
        id: "2",
        text: "New Item 2",
      },
    ],
  };
  // https://jestjs.io/docs/expect

  xit("Validar Button inicial", () => {
    render(<TodoApp />);
    // screen.debug();
    expect(screen.queryByTestId("agregar")).not.toBeNull();
    expect(screen.getByText("Agregar Tarea #1")).toBeInTheDocument();
  });

  it("Validar Button Submit", () => {
    // https://dev.to/itnext/how-you-can-use-react-testing-library-to-test-component-surface-49pm
    render(<TodoApp />);

    // cambiar input
    fireEvent.change(screen.getByTestId("new-todo-id"), {
      target: { value: "OTRO TODO" },
    });
    //
    fireEvent.submit(screen.getByTestId("form-test-id"));
    screen.debug();
    expect(screen.getByText("Agregar Tarea #1")).not.toBeInTheDocument();
    expect(screen.getByText("Agregar Tarea #2")).toBeInTheDocument();
  });

  xit("Validar Render con Lista Vacia", () => {
    render(<TodoList items={[]} />);
    // screen.debug();
    expect(screen.queryByText("New Item 1")).toBeNull();
  });

  xit("Validar Render con Lista Llena", () => {
    const { rerender } = render(<TodoList items={props.items} />);

    // screen.debug();
    expect(
      screen.getByTestId("listaTest").getElementsByTagName("LI")
    ).toHaveLength(2);
    expect(screen.queryByText("New Item 2")).toBeInTheDocument();

    rerender(<TodoList items={[]} />);
    // screen.debug();
    expect(screen.queryByText("New Item 1")).toBeNull();
  });
});
