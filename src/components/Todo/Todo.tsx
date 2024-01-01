import { Button, Checkbox } from "@mantine/core"
import { MdDelete } from "react-icons/md"
import React from "react"
import { ITodo } from "../../interfaces/todo"

export const Todo: React.FC<ITodo> = ({
	id,
	title,
	completed,
	completeToggle,
	deleteTodo
}) => {
	return (
		<div className={`todo ${completed ? "completed" : ""} `}>
			<Checkbox
				color={`${completed && "green"}`}
				checked={completed}
				onChange={() => completeToggle(id)}
				label={title}
			/>
			<Button onClick={() => deleteTodo(id)} color="red" size="xs">
				<MdDelete />
			</Button>
		</div>
	)
}
