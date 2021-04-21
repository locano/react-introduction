import React from "react";
export default function TodoList (props){
  return (
    <div>
      <ul data-testid="listaTest">
        {props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
