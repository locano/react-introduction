import React from "react";
import { screen, render, cleanup } from "@testing-library/react";


import TodoApp from "./todoApp";
import TodoList from "./todoList";

describe("Todo App", () => {
  let props = {
    items:[
      {
        id: "1",
        text: "New Item 1",
      },
      {
        id: "2",
        text: "New Item 2",
      },
    ]
  };
  // https://jestjs.io/docs/expect

  it("Validar Button inicial", () => {
    render(<TodoApp />);
    // screen.debug();
    expect(screen.queryByTestId("agregar")).not.toBeNull();    
    expect(screen.getByText("Agregar Tarea #1")).toBeInTheDocument();
    
  });

  it("Validar Render con Lista Vacia", () => {
    render(<TodoList items={[]} />);
    // screen.debug();
    expect(screen.queryByText("New Item 1")).toBeNull();
    
  });

  it("Validar Render con Lista Llena", () => {
    const { rerender } = render(<TodoList items={props.items} />);
    
    // screen.debug();
    expect(screen.getByTestId("listaTest").getElementsByTagName("LI")).toHaveLength(2)
    expect(screen.queryByText("New Item 2")).toBeInTheDocument();

    
    rerender(<TodoList items={[]} />);
    // screen.debug();
    expect(screen.queryByText("New Item 1")).toBeNull();
    
  });
});
