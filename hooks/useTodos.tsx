'use client'
import { useCallback, useState } from 'react'
import { Todo } from '../types/todo'

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const createTodo = useCallback((text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: text,
      completed: false,
      createdAt: Date.now(),
    }
    setTodos((prev) => [...prev, newTodo])
  }, [])

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }, [])

  const updateTodo = useCallback((id: string, title: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    )
  }, [])

  return { todos, createTodo, deleteTodo, updateTodo }
}

export default useTodos
