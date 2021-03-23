import React from "react";
import "./todoApp.css";
class TodoApp extends React.Component {
  // Constructor para nueva TodoApp
  constructor(props) {
    super(props);
    // Nueva variable items y text
    this.state = { items: [], text: "" };
    // Nuevos variables para manejar funciones de handle del formulario
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   Render en el virtual DOM
  render() {
    return (
      <div>
        <h3>Ingrese las tareas pendientes:</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">¿Qué se necesita hacer?</label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Agregar Tarea #{this.state.items.length + 1}</button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    // Crear nuevo elemento de la lista
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.state.items.push(newItem);
    this.setState((state) => ({
      items: this.state.items,
      text: "",
    }));
    console.log(this.state.items);
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
