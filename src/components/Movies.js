import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const no_image =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
const poster = 'https://images.tmdb.org/t/p/w1280';

const Movie = ({ title, vote_average, poster_path, id }) => {
  const rating = () => {
    if (vote_average >= 8) {
      return 'green-rating';
    }

    if (vote_average >= 7) {
      return 'orange-rating';
    }

    if (vote_average > 6) {
      return 'yellow-rating';
    }

    if (vote_average <= 6) {
      return 'red-rating';
    }
  };

  return (
    <div className="movie">
      <Link to={`/movies/${id}`}>
        <img src={poster_path ? poster + poster_path : no_image} alt={title} />
      </Link>
      <div className="movie-info">
        <h3>{title}</h3>
        <div className="star">
          <FaStar style={{ color: 'yellow' }} />
          <span className={rating()}>{vote_average.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
