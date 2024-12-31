'use client'

// main tools
import { useEffect, useState } from 'react'

// components
import { Button } from '@/app/_components/atoms/button'
import { ShowGenresButton } from './show-genres-button'
import { LoadingGames } from './loader'
import { GameCard } from './game-card'

// services
import { getGames } from '@/app/_services/get-games'

// types
import type { GameDataType } from '@/app/_types/models/game'
import type { SearchParamsDataType } from '@/app/_types'
import type { FC } from 'react'
import Link from 'next/link'

type GamesViewProps = {
  params: SearchParamsDataType
}

export const GamesView: FC<GamesViewProps> = ({ params }) => {
  const [loading, setLoading] = useState(true)
  const [showGenres, setShowGenres] = useState(false)
  const [games, setGames] = useState<GameDataType[]>()
  const [filter, setFilter] = useState({ page: 1, total: NaN })

  const handleNextPage = () =>
    filter.page < filter.total &&
    setFilter({ page: filter.page + 1, total: filter.total })

  const handleShowGenres = () => setShowGenres((prev) => !prev)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const { games, currentPage, totalPages } = await getGames({
        params,
        page: filter.page,
      })

      setGames((prev) => (prev ? [...prev, ...games] : games))
      setFilter({ page: currentPage, total: totalPages })
      setLoading(false)
    })()
  }, [params, filter.page])

  return (
    <section>
      <div className='mt-8 w-full flex justify-center md:justify-end items-center'>
        <Button
          color='SECONDARY'
          onClick={handleShowGenres}
          variant={params.genre ? 'BUTTON' : 'GHOST'}
        >
          Genre
        </Button>
        <div className='mx-4 border-l border-secondary-content h-6' />
        <Button color='SECONDARY' variant={params.genre ? 'GHOST' : 'BUTTON'}>
          <Link href='/'>All</Link>
        </Button>
        <ShowGenresButton
          showGenres={showGenres}
          handleShowGenres={handleShowGenres}
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
        {games?.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
        {(!games || loading) && <LoadingGames />}
      </div>
      {filter.page < filter.total && (
        <Button loading={loading} className='mt-2' onClick={handleNextPage}>
          Load More
        </Button>
      )}
    </section>
  )
}
