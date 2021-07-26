import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const poster = 'https://images.tmdb.org/t/p/w1280';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const fetchMovie = async (url) => {
    const response = await axios(url);
    const data = response.data;
    setMovie(data);
  };
  const movieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=4e68eee6b3b16a4f7b19eb0df5f38dab&language=en-US`;

  useEffect(() => {
    fetchMovie(movieURL);
  }, [movieURL]);

  const {
    backdrop_path,
    title,
    poster_path,
    release_date,
    status,
    overview,
    vote_average,
  } = movie;

  return (
    <>
      <header className="movie-header">
        <div className="title">
          <h1>Movie DB</h1>
          <h2>{title}</h2>
        </div>
        <Link to="/" className="link-btn">
          back to home
        </Link>
      </header>
      <div className="container">
        <div className="backdrop">
          <img src={poster + backdrop_path} alt={title} />
        </div>
        <div className="single-movie-movie-info">
          <div className="poster-container">
            <img src={poster + poster_path} alt={title} />
          </div>
          <div className="info-container">
            <h2>{title}</h2>
            <span>{release_date}</span>
            <span>{status}</span>
            <span>Rating : {vote_average ? vote_average.toFixed(1) : '?'}</span>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
