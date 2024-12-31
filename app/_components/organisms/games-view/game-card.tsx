'use client'

// components
import { Button } from '@/app/_components/atoms/button'
import Image from 'next/image'

// types
import type { GameDataType } from '@/app/_types/models/game'
import type { FC } from 'react'

const GameCard: FC<GameDataType> = (props) => {
  const handleAddToCar = () => console.log('added')

  return (
    <div className='w-full h-full rounded-xl border border-secondary-stroke p-6 flex flex-col justify-between gap-3'>
      <div className='relative w-full h-60'>
        <Image
          fill
          alt='game'
          sizes='300 300'
          src='/ad-logo-black.svg'
          className='bg-red-500 rounded-t-xl object-cover'
        />
      </div>
      <span className='font-bold text-base text-neutral-500'>
        {props.genre}
      </span>
      <div className='flex justify-between font-bold text-secondary-content'>
        <p className='text-lg'>{props.name}</p>
        <p className='text-xl'>{props.price}$</p>
      </div>
      <Button onClick={handleAddToCar} variant='OUTLINE' color='SECONDARY'>
        Add to Car
      </Button>
    </div>
  )
}

export default GameCard
