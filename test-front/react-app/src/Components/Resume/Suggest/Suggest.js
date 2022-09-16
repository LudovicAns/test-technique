import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Card from '../../Card/Card';
import './Suggest.css'

export default function Suggest(props) {

  const id = props.id;
  const [suggest, setSuggest] = useState([]);

  const apiKey = "ad2c28e0345278f3c8b002efddadf28f";
  const language = "fr-FR";
  const url = "https://api.themoviedb.org/3/movie/";
  const request = id + "/recommendations?api_key=" + apiKey + "&language=" + language + "&page=1";
  const requestURL = url + request;

  useEffect(() => {
    fetch(requestURL)
    .then(response => response.json())
    .then(data => setSuggest(data.results));
  }, [id, requestURL]);

  return (
    <div className='Suggest'>
      {suggest.map(movie => <Card movie={movie} />)}
    </div>
  )
}
