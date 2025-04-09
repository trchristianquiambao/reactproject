import React from 'react';
import NewsCard from './NewsCard';
import { Article } from '../types/articles';
import '../styles/NewsList.css';

interface NewsListProps {
  articles: Article[];
}

const NewsList: React.FC<NewsListProps> = ({ articles }) => {
  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
