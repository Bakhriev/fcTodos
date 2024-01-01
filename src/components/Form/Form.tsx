import { Input, Button } from "@mantine/core"
import "@mantine/core/styles.css"
import { IForm } from "../../interfaces/todo"

export const Form: React.FC<IForm> = ({ value, changeValue, createTodo }) => {
	return (
		<>
			<h6 className="title">Add Todo</h6>
			<form className="form" onSubmit={e => createTodo(e)}>
				<Input
					type="text"
					value={value}
					placeholder="Learn React"
					className="fullWidth"
					onChange={e => changeValue(e)}
				/>
				<Button className="btn fullWidth" type="submit">
					Add
				</Button>
			</form>
		</>
	)
}
