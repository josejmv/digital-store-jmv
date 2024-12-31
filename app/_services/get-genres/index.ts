export const getGenres = () =>
  fetch('/api/genres').then((res) => res.json()) as Promise<{
    genres: string[]
  }>
