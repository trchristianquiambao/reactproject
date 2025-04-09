import React from 'react';
import { Article } from '../types/articles';
import NewsCard from './NewsCard';
import '../styles/NewsList.css';

interface NewsListProps {
  articles: Article[];
}

const NewsList: React.FC<NewsListProps> = ({ articles }) => {
  return (
    <section className="news-section">
      <h2 className="section-title">Front Page</h2>
      <div className="news-list">
        {articles.map((article, index) => {
          const layoutType = 'vertical';
          return (
            <div key={index} className="news-item">
              <NewsCard article={article} layoutType={layoutType} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewsList;
