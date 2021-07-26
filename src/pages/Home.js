import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Movies from '../components/Movies';
import Header from '../components/Header';

const featuredURl =
  'https://api.themoviedb.org/3/discover/movie?api_key=4e68eee6b3b16a4f7b19eb0df5f38dab&language=en-US&sort_by=popularity.desc&';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (url) => {
    const response = await axios(url);
    const data = response.data.results;
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies(featuredURl);
  }, []);

  return (
    <>
      <Header fetchMovies={fetchMovies} />
      {movies < 1 ? (
        <div className="no-movies">
          <h1> There is no movie</h1>
        </div>
      ) : (
        <div className="container">
          {movies.map((movie) => {
            return <Movies key={movie.id} {...movie} />;
          })}
        </div>
      )}
    </>
  );
};

export default Home;
