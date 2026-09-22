import { useState } from "react";
import "./App.css";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

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

  // why we use ... because we want to create a copy of the todos array and not modify the original array directly.
  // ye is liye kerte hai take react ko pata chale ki state change hui hai aur UI rerender ho.
  const markDone = (ind) => {
    let arr = [...todos];
    arr[ind].isDone = !arr[ind].isDone;
    setTodos(arr);
  };
  const deleteTodo = (ind) => {
    let arr = [...todos];
    arr.splice(ind, 1);
    setTodos(arr);

  // UPNEXT I will be creating functionalities to edit the todo items
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
          {todos.map((data, ind) => {
            console.log("ind", ind, "data", data);
            return (
              <div
                className="todo-item"
                key={data.title}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: data.isDone ? "line-through" : "none",
                }}
              >
                <span>
                  {ind + 1 + ")"} {data.title}
                </span>
                <div className="todo-actions">
                  <button
                    onClick={() => markDone(ind)}
                    title={data.isDone ? "Mark as not done" : "Mark as done"}
                    aria-label={data.isDone ? "Mark as not done" : "Mark as done"}
                    className="todo-action"
                  >
                    <FaRegCheckCircle />
                  </button>
                  <button
                    onClick={() => deleteTodo(ind)}
                    title="Delete todo"
                    aria-label="Delete todo"
                    className="todo-action todo-action-delete"
                  >
                    <MdOutlineDelete />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Todos;
