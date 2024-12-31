// main tools
import { twMerge } from 'tailwind-merge'

// components
import { Button } from '@/app/_components/atoms/button'

// types
import type { FC } from 'react'

type ShowGenresButtonProps = {
  showGenres: boolean
  handleShowGenres: () => void
}

export const ShowGenresButton: FC<ShowGenresButtonProps> = ({
  handleShowGenres,
  showGenres,
}) => (
  <Button
    variant='GHOST'
    onClick={handleShowGenres}
    className={twMerge(
      'transition-all duration-100',
      showGenres ? 'rotate-180' : ''
    )}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='w-5 h-5'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M5 15l7-7 7 7'
      />
    </svg>
  </Button>
)
