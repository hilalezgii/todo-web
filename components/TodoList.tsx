import { memo } from 'react'
import { Todo } from '../types/todo'
import TodoItem from './TodoItem'

type TodoListProps = {
  todos: Todo[]
  onDelete: (id: string) => void
  onUpdate: (id: string, title: string) => void
}

const TodoList = memo(({ todos, onDelete, onUpdate }: TodoListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  )
})

TodoList.displayName = 'TodoList'

export default TodoList
