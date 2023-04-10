import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Film(props) {
  const [movie, setMovie] = useState();

  let { id } = useParams();
  // URL'den alınan :id parametresini bu değişkene aktarın


  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/filmler/${id}`) // Bu uç noktayı Postman'le çalışın
      .then(response => {
        // Bu kısmı log statementlarıyla çalışın
        console.log(response + response.data)
        // ve burdan gelen response'u 'movie' e aktarın
        setMovie(response.data)
      })
      .catch(error => {
        console.error(error);
      });
    // Bu effect her `id ` değiştiğinde çalışmalı
    // Bunu nasıl gerçekleştirebiliriz?
  }, [id]);

  // Yalnızca esnek görevlere geçtiğinizde burdaki yorum etiketini kaldırın
  // const filmiKaydet = evt => { }

  if (!movie) {
    return <div>Film bilgisi yükleniyor...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Kaydet</div>
    </div>
  );
}
