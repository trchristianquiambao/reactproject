import { Link, useNavigate } from 'react-router-dom'
import { theme } from '../theme'
import { useState } from 'react'

const Header = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <header style={{
      backgroundColor: theme.colors.evergreen,
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
      {/* Logo/Home */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 style={{
          margin: 0,
          color: theme.colors.springGreen,
          fontWeight: 600,
          fontSize: '1.8rem'
        }}>
          GreenNews
        </h1>
      </Link>

      {/* Search Bar */}
      <form
        onSubmit={handleSubmit}
        style={{
          flex: 1,
          maxWidth: '500px',
        }}
      >
        <input
          type="text"
          placeholder="Search articles here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '0.6rem 1rem',
            borderRadius: '12px',
            border: 'none',
            fontSize: '1rem',
            fontFamily: 'Outfit, sans-serif',
            outline: 'none',
          }}
        />
      </form>
    </header>
  )
}

export default Header
