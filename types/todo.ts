export type Todo = {
  id: string
  title: string
  completed: boolean
  createdAt: number
}

export type TodoInputProps = {
  createTodo: (text: string) => void
}

export type TodoItemProps = {
  todo: Todo
  onDelete: (id: string) => void
  onUpdate: (id: string, title: string) => void
}

export type TodoListProps = {
  todos: Todo[]
  onDelete: (id: string) => void
  onUpdate: (id: string, title: string) => void
}

export type TodoStore = {
  todos: Todo[]
  createTodo: (text: string) => void
  deleteTodo: (id: string) => void
  updateTodo: (id: string, title: string) => void
}
