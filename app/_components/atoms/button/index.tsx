// main tools
import { twMerge } from 'tailwind-merge'
import { forwardRef } from 'react'

// utils
import { buttonDimensions, buttonVariants } from './utils'

// types
import type { ButtonProps } from './types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = 'md',
      className = '',
      loading = false,
      color = 'PRIMARY',
      variant = 'BUTTON',
      underlineVisible = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={loading}
      className={twMerge(
        'border-none break-words font-sans rounded-lg flex justify-center items-center transition-colors ease-in p-2 disabled:opacity-50 disabled:cursor-not-allowed',
        buttonDimensions[size],
        buttonVariants[variant][color],
        underlineVisible ? 'underline' : '!no-underline',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
)
Button.displayName = 'Button'
