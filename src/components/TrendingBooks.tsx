import { useTrendingBooks } from '@/apis/BooksApi'

export const TrendingBooks = () => {
  const { data } = useTrendingBooks({ from: '2025-01-01', to: '2025-05-30' })

  return JSON.stringify(data, null, 2)
}
