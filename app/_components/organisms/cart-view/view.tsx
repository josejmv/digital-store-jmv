'use client'

// main tools
import { useState, useEffect } from 'react'

// components
import { GamesList } from './games-list'
import { Summary } from './summary'

// types
import type { GameDataType } from '@/app/_types/models/game'
import type { FC } from 'react'

export const CartView: FC = () => {
  const [cart, setCart] = useState<GameDataType[]>()

  const handleClearCart = () => setCart([])

  const handleRemoveItem = (id: string) => {
    const updatedCart = cart?.filter((game) => game.id !== id)
    setCart(updatedCart)
    window.localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  useEffect(() => {
    const response = window.localStorage.getItem('cart')

    if (!response) setCart([])
    else setCart(JSON.parse(response) as GameDataType[])
  }, [])

  if (!cart) return <div className='h-48 bg-gray-300 rounded' />

  return (
    <>
      <h1 className='font-bold text-4xl'>Your Cart</h1>
      <p className='text-2xl font-normal my-4'>{cart.length} items</p>

      <div className='flex flex-col md:flex-row justify-between gap-20'>
        <GamesList cart={cart} handleRemoveItem={handleRemoveItem} />
        <Summary cart={cart} handleClearCart={handleClearCart} />
      </div>
    </>
  )
}
