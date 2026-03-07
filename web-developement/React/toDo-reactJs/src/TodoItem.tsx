import { Trash, Trash2 } from "lucide-react";

type Priority = "Urgente" | "Moyenne" | "Basse"

type Todo = {
  id : number;
  text : string;
  priority : Priority;
}

type Props = {
    todo : Todo 
    onDelete : () => void
}

const TodoItem = ({todo, onDelete} : Props ) => {

    return (
        <li key={todo.id} className="p-3">
            
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-primary" />
                    <span className="text-md font-bold">{todo.text}</span>
                    <span className={`badge badge-sm badge-soft ${todo.priority == "Urgente" ? "badge-error" : todo.priority == "Moyenne" ? "badge-warning" : todo.priority == "Basse" ? "badge-success" : "" }`}>{todo.priority}</span>
                </div>
                <button className="btn btn-sm btn-error btn-soft" onClick={onDelete}>
                    <Trash className="w-4 h-4" />
                </button>
            </div>
        </li>
    )
}

export default TodoItem;