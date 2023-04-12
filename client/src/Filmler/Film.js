import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import FilmCard from './FilmCard'

export default function Film(props) {
  const [movie, setMovie] = useState()

  let { id } = useParams()

  // URL'den alınan :id parametres            ini bu değişkene aktarın

  useEffect(() => {
    console.log(id)
    axios
      .get(`http://localhost:5001/api/filmler/${id}`) // Bu uç noktayı Postman'le çalışın
      .then((response) => {
        // Bu kısmı log statementlarıyla çalışın
        console.log('response>', response)
        setMovie(response.data)
        // ve burdan gelen response'u 'movie' e aktarın
      })
      .catch((error) => {
        console.error(error)
      })
    // Bu effect her `id ` değiştiğinde çalışmalı
    // Bunu nasıl gerçekleştirebiliriz?
  }, [id])

  // Yalnızca esnek görevlere geçtiğinizde burdaki yorum etiketini kaldırın
  const filmiKaydet = (evt) => {
    props.cbSave(id)
  }

  if (!movie) {
    return <div>Film bilgisi yükleniyor...</div>
  }

  return (
    <div className="save-wrapper">
      <FilmCard movie={movie} />
      <div onClick={filmiKaydet} className="save-button">
        Kaydet
      </div>
    </div>
  )
}
