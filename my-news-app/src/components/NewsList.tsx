import { useEffect, useState } from 'react'
import NewsCard from './NewsCard'

const NewsList = () => {
  const [articles, setArticles] = useState<any[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
      const data = await res.json()
      setArticles(data.articles)
    }
    fetchNews()
  }, [])

  return (
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
  )
}

export default NewsList
