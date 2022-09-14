import React from "react";

export default function Card(props) {

  const movie = props.movie;
  const setResume = props.setResume;

  function getPosterFullLink(posterPath) {
    const url = "https://image.tmdb.org/t/p/w500" + posterPath;
    return url;
  }

  return (
    <div onClick={() => setResume(movie)} className="Card">
      <img src={getPosterFullLink(movie.poster_path)} alt={movie.title} />
    </div>
  );
}
