import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export default function FilmListesi(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <FilmDetayları key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function FilmDetayları(props) {
  // const navigate = useHistory();
  const { title, director, metascore } = props.movie;

  return (
    <Link>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  );
}
