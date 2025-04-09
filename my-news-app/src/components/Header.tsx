import React from 'react';
import '../styles/Header.css';

interface HeaderProps {
  category: string;
  setCategory: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ category, setCategory }) => {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <header className="header">
        <div className="logo" onClick={() => window.location.reload()}>
          TwistNews
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search articles here..." />
        </div>
      </header>
      <div className="category-sort">
        <select value={category} onChange={handleCategoryChange}>
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>
    </>
  );
};

export default Header;
