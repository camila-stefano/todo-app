import { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [todos, setTodos] = useState(data);

  return (
    <div className="container">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
