export type Todo = {
  id: string
  title: string
  completed: boolean
  createdAt: number
}

export type TodoInputProps = {
  createTodo: (text: string) => void
  todo: Todo
}
