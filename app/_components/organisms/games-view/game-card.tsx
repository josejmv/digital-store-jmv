'use client'

// main tools
import { useEffect, useState } from 'react'

// components
import { Button } from '@/app/_components/atoms/button'
import Image from 'next/image'

// types
import type { GameDataType } from '@/app/_types/models/game'
import type { FC } from 'react'

export const GameCard: FC<GameDataType> = (props) => {
  const [inCart, setInCart] = useState<boolean>()

  const handleAddToCart = () => {
    const cart = window.localStorage.getItem('cart')

    if (!cart)
      window.localStorage.setItem('cart', JSON.stringify([{ ...props }]))
    else {
      const parsedCart = JSON.parse(cart)
      if (!inCart) parsedCart.push({ ...props })
      else parsedCart.splice(parsedCart.indexOf(props.id), 1)

      window.localStorage.setItem('cart', JSON.stringify(parsedCart))
    }

    setInCart(!inCart)
  }

  useEffect(() => {
    const cart = window.localStorage.getItem('cart')

    if (!cart) setInCart(false)
    else
      setInCart(
        JSON.parse(cart).some((game: GameDataType) => game.id === props.id)
      )
  }, [props])

  return (
    <div className='w-full h-full rounded-xl border border-secondary-stroke p-6 flex flex-col justify-between gap-3'>
      <div className='relative w-full h-60'>
        <Image
          fill
          sizes='300 300'
          src='/ad-logo-black.svg'
          alt={`game name: ${props.name}`}
          className='bg-red-500 rounded-t-xl object-cover'
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
      <span className='font-bold text-base text-neutral-500'>
        {props.genre}
      </span>
      <div className='flex justify-between font-bold text-secondary-content'>
        <p className='text-lg'>{props.name}</p>
        <p className='text-xl'>{props.price}$</p>
      </div>
      <Button
        color='SECONDARY'
        onClick={handleAddToCart}
        variant={inCart ? 'BUTTON' : 'OUTLINE'}
      >
        {inCart ? 'Remove' : 'Add To Cart'}
      </Button>
    </div>
  )
}
