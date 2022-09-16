import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Home.css'

export default function Home() {

  const [sortBy, setSortBy] = useState('popularity.desc');

  const apiKey = "ad2c28e0345278f3c8b002efddadf28f";
  const language = "fr-FR";
  const url = "https://api.themoviedb.org/3/discover/";
  const request = "movie?api_key=" + apiKey + "&language=" + language + "&sort_by=" + sortBy;
  const requestURL = url + request;

  const [movies, setMovies] = useState([]);

  const reversSort = () => {
    if (sortBy === 'popularity.desc') {
      setSortBy('release_date.desc');
    } else {
      setSortBy('popularity.desc');
    }
  }

  useEffect(() => {
    fetch(requestURL)
    .then(response => response.json())
    .then(data => setMovies(data.results));
  }, [sortBy, requestURL]);

  return (
    <div className='Home'>
      <label htmlFor="sort">Triage par date de sortie : </label>
      <button id='sort' onClick={reversSort}>{sortBy === 'release_date.desc' ? '✅' : '❌'}</button>
      <div className="movies">
        {movies.map(movie => <Card key={movie.id} movie={movie}/>)}
      </div>
      
    </div>
  )
}
