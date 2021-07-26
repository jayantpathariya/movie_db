import React, { useState } from 'react';

const searchURL =
  'https://api.themoviedb.org/3/search/movie?api_key=4e68eee6b3b16a4f7b19eb0df5f38dab&query=';

const Header = ({ fetchMovies }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetchMovies(searchURL + searchTerm);
    }
  };
  return (
    <>
      <header className="homepage-header">
        <h1>Movie DB</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </header>
    </>
  );
};

export default Header;
