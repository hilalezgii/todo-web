'use client'
import { useTodoStore } from '@/store/useTodoStore'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const TodoContainer = () => {
  const { todos, createTodo, deleteTodo, updateTodo } = useTodoStore()

  return (
    <>
      <TodoInput createTodo={createTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
    </>
  )
}

export default TodoContainer
