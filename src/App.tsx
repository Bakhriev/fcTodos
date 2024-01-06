import "./css/main.css"
import { useEffect, useState } from "react"
import { Todo } from "./components/Todo/Todo"
import { Form } from "./components/Form/Form"
import { v4 as uuidv4 } from "uuid"
import { Button } from "@mantine/core"
import { ITodo } from "./interfaces/todo"

function App() {
	const storedTodos = JSON.parse(localStorage.getItem("todos")!) || []

	const [todos, setTodos] = useState(storedTodos)
	const [value, setValue] = useState("")
	const [filter, setFilter] = useState("all")

	const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (value.trim() === "") {
			return
		}
		const newTodo = { id: uuidv4(), title: value, completed: false }
		const newTodos = [...todos, newTodo]

		setTodos(newTodos)
		setValue("")
	}

	const deleteTodo = (id: string) => {
		const newTodos = todos.filter((todo: ITodo) => todo.id !== id)
		setTodos(newTodos)
	}

	const completeToggle = (id: string) => {
		const newTodos = todos.map((todo: ITodo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		})
		setTodos(newTodos)
	}

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos))
	}, [todos])

	const filterTodos = () => {
		switch (filter) {
			case "active":
				return todos.filter((todo: ITodo) => todo.completed === false)
			case "completed":
				return todos.filter((todo: ITodo) => todo.completed === true)
			case "all":
				return todos
			default:
				return todos
		}
	}

	return (
		<div className="wrapper">
			<Form value={value} changeValue={changeValue} createTodo={createTodo} />
			<div className="filters">
				<Button onClick={() => setFilter("all")} type="button">
					All
				</Button>
				<Button onClick={() => setFilter("active")} type="button">
					Active
				</Button>
				<Button onClick={() => setFilter("completed")} type="button">
					Completed
				</Button>
			</div>
			<div className="todo-list">
				{filterTodos().length ? (
					filterTodos().map((todo: ITodo) => (
						<Todo
							key={todo.id}
							id={todo.id}
							completed={todo.completed}
							title={todo.title}
							completeToggle={completeToggle}
							deleteTodo={deleteTodo}
						/>
					))
				) : (
					<h2 className="no">No Todos</h2>
				)}
			</div>
		</div>
	)
}

export default App
