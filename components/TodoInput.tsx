'use client'
import { memo, useCallback, useState } from 'react'
import { TodoInputProps } from '../types/todo'

const TodoInput = memo(({ createTodo }: TodoInputProps) => {
  const [text, setText] = useState('')

  const onCreateTodo = useCallback(() => {
    if (text.trim().length > 0) {
      createTodo(text.trim())
      setText('')
    }
  }, [text, createTodo])

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="What needs to be done?"
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onCreateTodo()}
        className="flex-1 bg-[#1a2e4a] text-white placeholder-[#4a6080] border border-[#1e3a5f] rounded-lg px-4 py-3 outline-none focus:border-[#ff6b35] transition-colors"
      />
      <button
        type="button"
        onClick={onCreateTodo}
        className="bg-[#ff6b35] hover:bg-[#e55a25] text-white font-bold px-5 py-3 rounded-lg transition-colors"
      >
        Add
      </button>
    </div>
  )
})

TodoInput.displayName = 'TodoInput'

export default TodoInput
