export interface ITodo {
	id: string
	title: string
	completed: boolean
	completeToggle: (id: string) => void
	deleteTodo: (id: string) => void
}

export interface IForm {
	value: string
	changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
	createTodo: (e: React.FormEvent<HTMLFormElement>) => void
}
