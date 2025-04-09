import React from 'react';
import { Article } from '../types/articles';
import '../styles/NewsCard.css';

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="news-card">
      <img src={article.urlToImage} alt={article.title} />
      <div className="news-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </div>
  );
};

export default NewsCard;
