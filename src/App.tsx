import { useState } from "react";
import "./App.css";

type ToDos = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [todos, setTodos] = useState<ToDos[]>([]);

   function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTodos((newtodos) => {
      return [
        ...newtodos,
        { id: crypto.randomUUID(), title: newTask, completed: false },
      ];
    });
    setNewTask("");
  }

  return (
    <>
      <form onSubmit={submit} className="">
        <div className="">
          <label htmlFor="task">Add task</label>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            placeholder="add new task"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <ul className="">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} />
                {todo.title}
              </label>
              <button className="btn-delete">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
