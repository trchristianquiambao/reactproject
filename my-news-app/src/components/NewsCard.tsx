import { theme } from '../theme'

const NewsCard = ({ article }: { article: any }) => {
  return (
    <div style={{
      backgroundColor: theme.colors.forestGreen,
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s',
    }}>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt="news"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
          }}
        />
      )}
      <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{article.title}</h3>
        <p style={{ flexGrow: 1 }}>{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme.colors.springGreen,
            textDecoration: 'none',
            marginTop: '0.8rem',
            fontWeight: 600,
            display: 'inline-block',
          }}
        >
          Read more →
        </a>
      </div>
    </div>
  )
}

export default NewsCard
