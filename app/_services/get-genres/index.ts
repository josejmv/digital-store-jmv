export const getGenres = () =>
  fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/genres`).then((res) =>
    res.json()
  ) as Promise<{ genres: string[] }>
