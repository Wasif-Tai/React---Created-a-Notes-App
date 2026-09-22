import { useState } from "react";
import "./App.css";

function Todos() {
  // Koi bhi aisi value jiske change hone se UI update hogi usko ham state main rakhenge.
  const [todos, setTodos] = useState([
    {
      title: "Wake Up For Fajr",
      isDone: false,
    },
    {
      title: "Have a Breakfast",
      isDone: false,
    },
  ]);
  const [todoInp, setTodoInp] = useState("");

  const addTodo = () => {
    if (todoInp == "") return alert("Add Value");
    let obj = { title: todoInp, isDone: false };
    setTodos([obj, ...todos]);
    setTodoInp("");
  };
  return (
    <main className="todo-page">
      <section className="todo-panel">
        <p className="todo-eyebrow">Daily list</p>
        <h1>Todo Application</h1>
        <div className="todo-form">
        <input
          aria-label="New todo"
          placeholder="Enter your todo"
          onChange={(e) => setTodoInp(e.target.value)}
          value={todoInp}
        />
        <button onClick={addTodo}>Add</button>
        </div>
        <div className="todo-list">
        {todos.map((data, index) => {
          return (
            <div className="todo-item" key={data.title}>
              {index + 1 + ")"} {data.title}
            </div>
          );
        })}
        </div>
      </section>
    </main>
  );
}

export default Todos;
