'use client'
import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'
import useTodos from '@/hooks/useTodos'

export default function Home() {
  const { todos, createTodo, deleteTodo, updateTodo } = useTodos()
  return (
    <main className="min-h-screen bg-[#0f1b2d] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#ff6b35] mb-6 text-center tracking-wide">
          Todo App
        </h1>
        <TodoInput createTodo={createTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
      </div>
    </main>
  )
}
