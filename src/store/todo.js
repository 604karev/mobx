import { makeAutoObservable } from "mobx";

class Todo {
    todos = [
        { id: 19999, title: "go to the store", isCompleted: false },
        { id: 29999, title: "leart mobx", isCompleted: false },
        { id: 39999, title: "go to the haircut", isCompleted: false },
    ]
    constructor() {
        makeAutoObservable(this)
    }

    addTodo = todo => this.todos.push(todo)

    removeTodo = id => this.todos = this.todos.filter(todo => todo.id !== id)

    completeTodo = todo => todo.isCompleted = !todo.isCompleted

    fetchTodo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(res => {
                console.log(res)
                this.todos = [...this.todos, ...res]
            })
    }
}

export default new Todo()