// types
import type { SearchParamsDataType } from '@/app/_types'
import type { GameDataType } from '@/app/_types/models/game'

/**
 * Get games from the API
 */
export const getGames = async (params: SearchParamsDataType) => {
  let url = '/api/games'
  const searchParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value))
      value.forEach((val) => searchParams.append(key, val))
    else if (value !== undefined) searchParams.append(key, value)
  })
  if (searchParams.toString().length) url = url + `?${searchParams.toString()}`

  return fetch(url).then((res) => res.json()) as Promise<{
    totalPages: number
    currentPage: number
    games: GameDataType[]
  }>
}
