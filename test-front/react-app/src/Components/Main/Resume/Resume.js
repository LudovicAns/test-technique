import React from 'react'

export default function Resume(props) {

  const movie = props.movie;
  const setResume = props.setResume;

  function getPosterFullLink(posterPath) {
    const url = "https://image.tmdb.org/t/p/w500" + posterPath;
    return url;
  }

  return (
    <div className="overlay">
        <div className="resume">
            <img src={getPosterFullLink(movie.poster_path)} alt={movie.title} />
            <div className="resume-content">
              <h1>{movie.title}</h1>
              {movie.release_date}
              <button onClick={() => setResume(null)}>X</button>
            </div>
        </div>
    </div>
  )
}
