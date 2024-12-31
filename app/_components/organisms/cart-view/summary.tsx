'use client'

// main tools
import { useMemo, useState } from 'react'

// components
import { Button } from '@/app/_components/atoms/button'

// utils
import { delay } from '@/app/_utils/endpoint'

// types
import type { GameDataType } from '@/app/_types/models/game'
import type { FC } from 'react'

type SummaryProps = {
  cart: GameDataType[]
  handleClearCart: () => void
}

export const Summary: FC<SummaryProps> = ({ cart, handleClearCart }) => {
  const [loading, setLoading] = useState(false)

  const price = useMemo(
    () => cart.reduce((total, game) => total + game.price, 0),
    [cart]
  )

  const handleProcessPayment = async () => {
    setLoading(true)
    await delay(1000)

    window.localStorage.setItem('cart', JSON.stringify([]))
    handleClearCart()
    setLoading(false)
    alert('Successfully Submitted')
  }

  return (
    <div className='w-full md:w-1/2 lg:w-1/3'>
      <div className='border rounded-lg p-4 mb-8'>
        <h2 className='font-bold text-2xl'>Order Summary</h2>
        <p className='text-lg'>{cart.length} Items</p>
        <div className='mt-8 flex flex-col gap-2'>
          {cart.map((game) => (
            <p className='flex justify-between' key={game.id}>
              <span>{game.name}</span>
              <span>{game.price}</span>
            </p>
          ))}
        </div>
        <hr className='my-4 border-secondary-content' />
        <p className='text-xl font-bold flex justify-between'>
          <span>Order total</span> <span>{price}$</span>
        </p>
      </div>

      <Button
        className='w-full'
        onClick={handleProcessPayment}
        disabled={cart.length === 0 || loading}
      >
        Checkout
      </Button>
    </div>
  )
}
