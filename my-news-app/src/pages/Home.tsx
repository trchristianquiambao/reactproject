import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsList from '../components/NewsList';
import { Article } from '../types/articles';
import { formatDate } from '../utils/formatDate';
import '../styles/global.css';

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState('general');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        const data = await res.json();
        const formattedArticles = data.articles.map((item: any) => ({
          title: item.title,
          description: item.description,
          url: item.url,
          urlToImage: item.urlToImage || 'https://via.placeholder.com/300x180',
          publishedAt: formatDate(item.publishedAt),
          author: item.author,
        }));
        setArticles(formattedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <Header category={category} setCategory={setCategory} />
      <main>
        <NewsList articles={articles} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
