'use client'

// main tools
import { useState } from 'react'

// components
import { GamesList } from './games-list'
import { Summary } from './summary'

// types
import type { GameDataType } from '@/app/_types/models/game'
import type { FC } from 'react'

export const CartView: FC = () => {
  const [cart, setCart] = useState(() => {
    const cart = localStorage.getItem('cart')

    if (!cart) return []
    return JSON.parse(cart) as GameDataType[]
  })

  const handleClearCart = () => setCart([])

  const handleRemoveItem = (id: string) => {
    const updatedCart = cart.filter((game) => game.id !== id)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

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
