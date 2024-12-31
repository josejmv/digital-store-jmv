import type { SearchParamsDataType } from '@/app/_types'
import type { GameDataType } from '@/app/_types/models/game'

/**
 * Get games from the API
 */
export const getGames = async (params: SearchParamsDataType) => {
  const searchParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value))
      value.forEach((val) => searchParams.append(key, val))
    else if (value !== undefined) searchParams.append(key, value)
  })
  return fetch(`/api/games?${searchParams.toString()}`).then((res) =>
    res.json()
  ) as Promise<{
    totalPages: number
    currentPage: number
    games: GameDataType[]
  }>
}
