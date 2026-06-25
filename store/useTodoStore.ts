import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { TodoStore } from '@/types/todo'

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],

      createTodo: (text) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: crypto.randomUUID(),
              title: text,
              completed: false,
              createdAt: Date.now(),
            },
          ],
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      updateTodo: (id, title) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, title } : todo
          ),
        })),
    }),
    { name: 'todo-storage' }
  )
)
