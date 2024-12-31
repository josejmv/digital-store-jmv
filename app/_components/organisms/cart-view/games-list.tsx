// components
import { GameCart } from './game-cart'

// types
import type { GameDataType } from '@/app/_types/models/game'
import { Fragment, type FC } from 'react'

type GamesListProps = {
  cart: GameDataType[]
  handleRemoveItem: (id: string) => void
}

export const GamesList: FC<GamesListProps> = ({ cart, handleRemoveItem }) => {
  return (
    <div className='w-full md:w-1/2 lg:w-2/3 flex flex-col gap-4'>
      {cart.map((game, idx) => (
        <Fragment key={game.id}>
          <GameCart onRemove={handleRemoveItem} {...game} />
          {idx !== cart.length - 1 && (
            <hr className='my-4 border-secondary-content' />
          )}
        </Fragment>
      ))}
    </div>
  )
}
