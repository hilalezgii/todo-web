import { memo } from 'react'
import { TodoListProps } from '../types/todo'
import TodoItem from './TodoItem'

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
