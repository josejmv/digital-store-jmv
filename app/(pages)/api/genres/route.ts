import { availableFilters, delay } from '@/app/_utils/endpoint'

export async function GET() {
  await delay(2000)

  return Response.json({ genres: availableFilters })
}
