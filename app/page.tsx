import TodoContainer from '@/components/TodoContainer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1b2d] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#ff6b35] mb-6 text-center tracking-wide">
          Todo App
        </h1>
        <TodoContainer />
      </div>
    </main>
  )
}
