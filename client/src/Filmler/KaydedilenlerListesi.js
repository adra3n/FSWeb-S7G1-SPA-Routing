import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function KaydedilenlerListesi(props) {
  let activeStyle = {
    color: 'red',
  }
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie) => (
        <span key={movie.id} className="saved-movie">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={`filmler/${movie.id}`}
          >
            {movie.title}
          </NavLink>
        </span>
      ))}
      <Link to="/">
        <div className="home-button">Anasayfa</div>
      </Link>
    </div>
  )
}
