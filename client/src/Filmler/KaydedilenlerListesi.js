import React from 'react';
import { NavLink } from 'react-router-dom';
export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <NavLink to="/">
        <div className="home-button">Anasayfa</div>
      </NavLink>
    </div>
  );
}
