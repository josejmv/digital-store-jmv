'use client'

// main tools
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// components
import { Button } from '@/app/_components/atoms/button'
import { LoadingGames } from './loader'

// services
import { getGames } from '@/app/_services/get-games'

// types
import type { GameDataType } from '@/app/_types/models/game'
import type { SearchParamsDataType } from '@/app/_types'
import type { FC } from 'react'

type GamesViewProps = {
  params: SearchParamsDataType
}

export const GamesView: FC<GamesViewProps> = ({ params }) => {
  const [games, setGames] = useState<GameDataType[]>()
  const [filter, setFilter] = useState({ page: 1, total: NaN })

  const handleNextPage = () =>
    filter.page < filter.total &&
    setFilter({ page: filter.page + 1, total: filter.total })

  useEffect(() => {
    ;(async () => {
      const { games, currentPage, totalPages } = await getGames({
        params,
        page: filter.page,
      })

      setGames((prev) => (prev ? [...prev, ...games] : games))
      setFilter({ page: currentPage, total: totalPages })
    })()
  }, [params, filter.page])

  const GameCard = dynamic(
    () => import('./game-card').then((mod) => mod.default),
    { loading: () => <LoadingGames /> }
  )

  return (
    <section>
      <p>filter</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {!games && <LoadingGames />}
        {games?.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
      {filter.page < filter.total && (
        <Button className='mt-2' onClick={handleNextPage}>
          Load More
        </Button>
      )}
    </section>
  )
}
