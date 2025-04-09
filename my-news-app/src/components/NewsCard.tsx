import React from 'react';
import { Article } from '../types/articles';
import '../styles/NewsCard.css';

interface NewsCardProps {
  article: Article;
  layoutType: 'vertical' | 'horizontal';
}

const NewsCard: React.FC<NewsCardProps> = ({ article, layoutType }) => {
  const handleCardClick = () => {
    window.open(article.url, '_blank');
  };

  return (
    <div className={`news-card ${layoutType}`} onClick={handleCardClick}>
      {layoutType === 'horizontal' ? (
        <>
          <img src={article.urlToImage} alt={article.title} className="side-image" />
          <div className="side-content">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        </>
      ) : (
        <>
          <img src={article.urlToImage} alt={article.title} />
          <div className="news-content">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsCard;
