'use client'
import { memo, useCallback, useState } from 'react'
import { Pencil, Trash2, Check } from 'lucide-react'
import { Todo } from '@/types/todo'
import Button from './Button'

type TodoItemProps = {
  todo: Todo
  onDelete: (id: string) => void
  onUpdate: (id: string, title: string) => void
}

const TodoItem = memo(({ todo, onDelete, onUpdate }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.title)

  const handleSave = useCallback(() => {
    if (editText.trim().length > 0) {
      onUpdate(todo.id, editText.trim())
      setIsEditing(false)
    }
  }, [editText, todo.id, onUpdate])

  const handleDelete = useCallback(() => {
    onDelete(todo.id)
  }, [todo.id, onDelete])

  return (
    <div className="flex items-center gap-3 bg-[#1a2e4a] border border-[#1e3a5f] rounded-lg px-4 py-3 mb-2">
      {isEditing ? (
        <input
          autoFocus
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          className="flex-1 bg-[#0f1b2d] text-white border border-[#ff6b35] rounded px-2 py-1 outline-none"
        />
      ) : (
        <span className="text-white flex-1">{todo.title}</span>
      )}

      {isEditing ? (
        <Button
          onClick={handleSave}
          className="p-2 rounded-lg text-green-400 hover:bg-[#1e3a5f] transition-colors"
        >
          <Check size={16} />
        </Button>
      ) : (
        <Button
          onClick={() => setIsEditing(true)}
          className="p-2 rounded-lg text-[#4a90d9] hover:bg-[#1e3a5f] transition-colors"
        >
          <Pencil size={16} />
        </Button>
      )}

      <Button
        onClick={handleDelete}
        className="p-2 rounded-lg text-[#ff6b35] hover:bg-[#2a1a0f] transition-colors"
      >
        <Trash2 size={16} />
      </Button>
    </div>
  )
})

TodoItem.displayName = 'TodoItem'

export default TodoItem
