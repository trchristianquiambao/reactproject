import React from 'react';
import '../styles/Header.css';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery, setCountry, setCategory }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <header className="header">
      <h1 className="logo" onClick={() => window.location.reload()}>
        GreenNews
      </h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="filters">
        <select onChange={handleCountryChange}>
          <option value="us">USA</option>
          <option value="ca">Canada</option>
          <option value="gb">UK</option>
          <option value="au">Australia</option>
          {/* Add more countries as needed */}
        </select>
        <select onChange={handleCategoryChange}>
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
