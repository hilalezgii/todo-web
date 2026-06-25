'use client'
import { memo, useCallback, useState } from 'react'
import { Pencil, Trash2, Check } from 'lucide-react'
import { TodoItemProps } from '@/types/todo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

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
        <Input
          autoFocus
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          className="flex-1 bg-[#0f1b2d] text-white border-[#ff6b35]"
        />
      ) : (
        <span className="text-white flex-1">{todo.title}</span>
      )}

      {isEditing ? (
        <Button variant="ghost" size="icon" onClick={handleSave} className="text-green-400 hover:bg-[#1e3a5f]">
          <Check size={16} />
        </Button>
      ) : (
        <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)} className="text-[#4a90d9] hover:bg-[#1e3a5f]">
          <Pencil size={16} />
        </Button>
      )}

      <Button variant="ghost" size="icon" onClick={handleDelete} className="text-[#ff6b35] hover:bg-[#2a1a0f]">
        <Trash2 size={16} />
      </Button>
    </div>
  )
})

TodoItem.displayName = 'TodoItem'

export default TodoItem
