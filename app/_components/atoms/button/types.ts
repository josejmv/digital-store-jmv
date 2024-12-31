// types
import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  size?: 'sm' | 'md' | 'lg'
  underlineVisible?: boolean
  color?: 'PRIMARY' | 'SECONDARY'
  variant?: 'BUTTON' | 'OUTLINE' | 'GHOST'
}
