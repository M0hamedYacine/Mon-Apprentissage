import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";


type Priority = "Urgente" | "Moyenne" | "Basse"

type Todo = {
  id : number;
  text : string;
  priority : Priority;
}

function App() {
  const [input, setInput] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("Moyenne")

  const savedTodos = localStorage.getItem("todos");
  const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filtre, setFilter] = useState<Priority | "Tous">("Tous");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  const addToDo = () => {
    if (input.trim() !== "") {

      const newTodo : Todo ={
        id : Date.now(),
        text : input.trim(),
        priority : priority
      }
      setTodos([newTodo , ...todos ])
      setInput("");
      setPriority("Moyenne");
      console.log(todos);
    }
  }

  let filteredTodos : Todo[] = [];
  if (filtre === "Tous") {
    filteredTodos = todos
  }
  else {
    filteredTodos = todos.filter((todo) => todo.priority === filtre )
  }

  const urgentCount = todos.filter((todo) => todo.priority == "Urgente").length
  const mediumCount = todos.filter((todo) => todo.priority == "Moyenne").length
  const lowCount = todos.filter((todo) => todo.priority == "Basse").length
  const totalCount = todos.length

  const deleteTodo = (id) => {
    const updateContent = todos.filter((todo) => todo.id !== id);
    setTodos(updateContent);
  }



  return (
    <>
      <div className="flex justify-center">
        <div className="w-2/3 flex flex-col gap-4 my-15 bg-base-300 p-5 rounded-2xl">
          <div className="flex gap-4">
            <input 
              type="text"
              className="input w-full"
              placeholder="Ajouter une tache..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <select 
              className="select w-full" 
              value={priority}
              onChange={(e) => setPriority(e.target.value as Priority) }
              >
              <option value="Urgente">Urgente</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Basse">Basse</option>
            </select>
            <button className="btn btn-primary" onClick={addToDo}>Ajouter</button>
          </div>

          <div className="space-y-2 flex-1 h-fit">
          <div className="flex flex-wrap gap-4 ">
            <button 
              className={`btn btn-soft  hover:border-zinc-700 ${filtre == "Tous" ? "btn-primary": ""}`} 
              onClick={() => setFilter("Tous")}
              >
              Tous {totalCount}
              </button>
              <button 
              className={`btn btn-soft  hover:border-zinc-700 ${filtre == "Urgente" ? "btn-primary": ""}`} 
              onClick={() => setFilter("Urgente")}
              >
              Urgente {urgentCount}
              </button>
              <button 
              className={`btn btn-soft  hover:border-zinc-700 ${filtre == "Moyenne" ? "btn-primary": ""}`} 
              onClick={() => setFilter("Moyenne")}
              >
              Moyenne {mediumCount}
              </button>
              <button 
              className={`btn btn-soft  hover:border-zinc-700 ${filtre == "Basse" ? "btn-primary": ""}`} 
              onClick={() => setFilter("Basse")}
              >
              Basse {lowCount}
              </button>
          </div>

          { filteredTodos.length > 0 ? (
            <ul className="divide-y divide-primary/20">
              {filteredTodos.map((todo) => (
                <TodoItem todo={todo} onDelete={() => deleteTodo(todo.id)} />
              ))}
            </ul>
          ) : (
            <div>Test_1</div>
          )}
        </div>
        </div>
      </div>
    </>
  )
}

export default App
