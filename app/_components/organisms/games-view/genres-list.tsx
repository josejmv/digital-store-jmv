// components
import { Button } from '@/app/_components/atoms/button'
import { LoadingGenres } from './loading-genres'
import Link from 'next/link'

// services
import { getGenres } from '@/app/_services/get-genres'

// hooks
import { useEffect, useState } from 'react'

// types
import type { FC } from 'react'

export const GenresList: FC = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<{ genres: string[] }>()

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const response = await getGenres()
      setData(response)

      setLoading(false)
    })()
  }, [])

  return (
    <div className='mt-3 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4'>
      {loading && <LoadingGenres />}
      {data &&
        data.genres.map((genre) => (
          <Button
            key={genre}
            variant='GHOST'
            underlineVisible
            color='SECONDARY'
          >
            <Link href={`?genre=${genre}`}>{genre}</Link>
          </Button>
        ))}
    </div>
  )
}
