import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import KaydedilenlerListesi from './Filmler/KaydedilenlerListesi'
import FilmListesi from './Filmler/FilmListesi'
import Film from './Filmler/Film'

export default function App() {
  const [saved, setSaved] = useState([]) // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get('http://localhost:5001/api/filmler') // Burayı Postman'le çalışın
        .then((response) => {
          // Bu kısmı log statementlarıyla çalışın
          console.log('data cekildi>', response)
          setMovieList(response.data)
          // ve burdan gelen response'u 'movieList' e aktarın
        })
        .catch((error) => {
          console.error('Sunucu Hatası', error)
        })
    }
    FilmleriAl()
  }, [])

  const KaydedilenlerListesineEkle = (id) =>
    !saved.includes(movieList.find((movie) => movie.id === parseInt(id)))
      ? setSaved([
          ...saved,
          movieList.find((movie) => movie.id === parseInt(id)),
        ])
      : null
  // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
  return (
    <BrowserRouter>
      <KaydedilenlerListesi list={saved} />
      <Routes>
        <Route path="/" element={<FilmListesi movies={movieList} />} />
        <Route
          path="/filmler/:id"
          element={<Film cbSave={KaydedilenlerListesineEkle} />}
        />
      </Routes>
    </BrowserRouter>
  )
}
