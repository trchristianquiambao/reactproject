import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsList from '../components/NewsList';
import { Article } from '../types/articles';
import { formatDate } from '../utils/formatDate';
import '../styles/global.css';

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [country, setCountry] = useState<string>('us');
  const [category, setCategory] = useState<string>('general');

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${searchQuery}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedArticles = data.articles.map((item: any) => ({
          title: item.title,
          description: item.description,
          url: item.url,
          urlToImage: item.urlToImage || 'https://via.placeholder.com/300x180',
          publishedAt: formatDate(item.publishedAt),
          author: item.author,
        }));
        setArticles(formattedArticles);
      })
      .catch((err) => console.error('Error fetching articles:', err));
  }, [country, category, searchQuery]);

  return (
    <div>
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        setCountry={setCountry} 
        setCategory={setCategory} 
      />
      <main>
        <NewsList articles={articles} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
