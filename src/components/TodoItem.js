import React from "react";

function TodoItem({ todo, onComplete, onDeleteItem }) {
  const getStyle = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none",
      margin: "20px",
      border: "1px solid #ffffff",
      backgroundColor: "#EEEEEE",
      display: "flex",
      justifyContent: "space-between",
    };
  };

  return (
    <div style={getStyle()}>
      <input type="checkbox" checked={todo.completed} onChange={() => onComplete(todo.id)}></input>
      {todo.task}
      <button className="clear-btn" onClick={() => onDeleteItem(todo.id)}>
        X
      </button>
    </div>
  );
}

export default TodoItem;
