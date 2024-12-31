import type { GameDataType } from '@/app/_types/models/game'
import Image from 'next/image'
import type { FC } from 'react'
import { Button } from '@/app/_components/atoms/button'

type GameCardProps = {
  onRemove: (id: string) => void
} & GameDataType

export const GameCart: FC<GameCardProps> = (props) => (
  <div className='w-full flex flex-col sm:flex-row gap-8 justify-between'>
    <div className='relative w-full sm:w-5/12 h-40'>
      <Image
        fill
        sizes='300 300'
        src='/ad-logo-black.svg'
        alt={`game name: ${props.name}`}
        className='bg-red-500 object-cover'
      />
      {props.isNew && (
        <Button
          color='SECONDARY'
          className='absolute top-2 left-2 cursor-default font-medium'
        >
          NEW
        </Button>
      )}
    </div>
    <div className='w-full sm:w-6/12 flex flex-col gap-4'>
      <p className='font-bold text-base text-neutral-500 flex items-center justify-between'>
        {props.genre}

        <Button
          size='sm'
          variant='GHOST'
          underlineVisible
          className='block sm:hidden'
          onClick={() => props.onRemove(props.id)}
        >
          Remove
        </Button>
      </p>
      <p className='font-bold text-secondary-content text-lg'>{props.name}</p>
      <span className='text-base text-neutral-500'>{props.description}</span>
      <p className='font-bold text-secondary-content text-lg text-end'>
        {props.price}$
      </p>
    </div>
    <div
      onClick={() => props.onRemove(props.id)}
      className='hidden sm:block w-full sm:w-1/12'
    >
      <svg
        fill='none'
        strokeWidth={1.5}
        viewBox='0 0 24 24'
        stroke='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        className='w-6 h-6 cursor-pointer'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </div>
  </div>
)
