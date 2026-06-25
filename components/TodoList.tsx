import { memo, useRef } from 'react'
import { TodoListProps } from '../types/todo'
import TodoItem from './TodoItem'
import { useVirtualizer } from '@tanstack/react-virtual'

const TodoList = memo(({ todos, onDelete, onUpdate }: TodoListProps) => {
  const parentRef = useRef<HTMLDivElement>(null)
  const virtualizer = useVirtualizer({
    count: todos.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 10,
  })
  return (
    <div ref={parentRef} className="max-h-[400px] overflow-auto">
      <div style={{ height: virtualizer.getTotalSize() }} className="relative">
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: virtualItem.start,
              width: '100%',
            }}
          >
            <TodoItem
              todo={todos[virtualItem.index]}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          </div>
        ))}
      </div>
    </div>
  )
})

TodoList.displayName = 'TodoList'

export default TodoList
