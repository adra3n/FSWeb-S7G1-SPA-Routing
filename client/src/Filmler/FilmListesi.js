import React from 'react'
import { useNavigate } from 'react-router-dom'

import FilmCard from './FilmCard'

export default function FilmListesi(props) {
  const navigate = useNavigate()

  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <div key={movie.id} onClick={() => navigate(`/filmler/${movie.id}`)}>
          <FilmCard movie={movie} />
        </div>
      ))}
    </div>
  )
}
