import { observer } from "mobx-react-lite"
import React from "react"
import todo from "./store/todo"


const Todo = observer(() => {
    return (
        <ul className="todo-list">
            <button onClick={todo.fetchTodo}>Fetch Todo</button>
            {todo.todos.map(item => <li className="todo-list__item" key={item.id}>
                <label className="todo-list__label">
                    <input type="checkbox" checked={item.isCompleted} onChange={() => todo.completeTodo(item)} />
                    {item.title}
                    <button onClick={() => todo.removeTodo(item.id)}>x</button>
                </label>
            </li>)}
        </ul>
    )
})
export default Todo