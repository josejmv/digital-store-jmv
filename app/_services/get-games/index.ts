import type { SearchParamsDataType } from '@/app/_types'
import type { GameDataType } from '@/app/_types/models/game'

type getGamesArgs = {
  page: number
  params: SearchParamsDataType
}

/**
 * Get games from the API
 */
export const getGames = async (args: getGamesArgs) => {
  let url = `/api/games?page=${args.page}`
  const searchParams = new URLSearchParams()
  Object.entries(args.params).forEach(([key, value]) => {
    if (Array.isArray(value))
      value.forEach((val) => searchParams.append(key, val))
    else if (value !== undefined) searchParams.append(key, value)
  })
  if (searchParams.toString() !== '') url += `&${searchParams.toString()}`

  return fetch(url).then((res) => res.json()) as Promise<{
    totalPages: number
    currentPage: number
    games: GameDataType[]
  }>
}
