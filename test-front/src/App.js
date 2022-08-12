import { useEffect } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';

let API_key = "&api_key=ad2c28e0345278f3c8b002efddadf28f";
let api_url = "https://api.themoviedb.org/3";
let url = api_url + "/discover/movie?sort_by=release_date.desc" + API_key;

function App() {
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
  });
  return (
    <>
      <MovieCard />
    </>
  )
}

export default App;
