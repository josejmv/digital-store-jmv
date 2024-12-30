export const buttonDimensions = Object.freeze({
  sm: 'text-sm leading-2 !max-h-9 py-1.5 px-2',
  md: 'text-base leading-2 !max-h-10 py-2 px-2',
  lg: 'text-base leading-2 !max-h-12 py-3 px-3',
})

export const buttonVariants = Object.freeze({
  BUTTON: {
    PRIMARY: 'text-primary-content bg-primary',
    SECONDARY: 'text-secondary-content bg-secondary',
  },
  OUTLINE: {
    PRIMARY:
      'text-primary border-primary border-solid border-2 bg-transparent hover:bg-primary hover:text-primary-content',
    SECONDARY:
      'text-secondary-content border-secondary-content border-solid border-2 bg-transparent hover:bg-secondary hover:border-secondary hover:text-secondary-content',
  },
  GHOST: {
    PRIMARY: 'text-primary decoration-primary',
    SECONDARY: 'text-secondary-content decoration-secondary-content',
  },
})
