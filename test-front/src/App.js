import { useEffect, useState } from 'react';
import './App.css';

let API_key = "&api_key=ad2c28e0345278f3c8b002efddadf28f";
let api_url = "https://api.themoviedb.org/3";
let url = api_url + "/discover/movie?sort_by=release_date.desc" + API_key;

function App() {
  function loadMovies() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovie(data.results))
  }

  const [movie, setMovie] = useState([]);
  useEffect(() => {loadMovies()});

  return <p>{movie.original_language}</p>
}

export default App;
