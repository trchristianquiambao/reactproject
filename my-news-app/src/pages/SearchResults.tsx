import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import NewsCard from '../components/NewsCard'

const SearchResults = () => {
  const [articles, setArticles] = useState<any[]>([])
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')

  useEffect(() => {
    const fetchNews = async () => {
      if (!query) return
      const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
      const data = await res.json()
      setArticles(data.articles)
    }

    fetchNews()
  }, [query])

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Search Results for "{query}"</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        padding: '2rem 0',
      }}>
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </main>
  )
}

export default SearchResults
