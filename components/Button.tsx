import { memo } from 'react'

type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
  className?: string
}

const Button = memo(({ onClick, children, className }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
