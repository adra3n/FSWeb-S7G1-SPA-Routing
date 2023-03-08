import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom"
import KaydedilenlerListesi from './Filmler/KaydedilenlerListesi';
import { Router } from 'express';
import Film from './Filmler/Film';
import FilmListesi from "./Filmler/FilmListesi"



export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get('http://localhost:5001/api/filmler') // Burayı Postman'le çalışın
        .then(response => {
          console.log(response.data)
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Sunucu Hatası', error);
        });
    }
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = id => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
    // let savedArr = [...saved];
    // !saved[id] ? savedArr.push(saved[id]) : console.log("Already saved!");
  };

  return (
    <div>
      <KaydedilenlerListesi list={[ /* Burası esnek */]} />
      <div>
        <Routes>
          <Route path={"/filmler/:id"} element={<Film KaydedilenlerListesineEkle={KaydedilenlerListesineEkle} />} />
          <Route path={"/"} element={<FilmListesi movieList={movieList} />} />
        </Routes>
      </div>
    </div >
  );
}
