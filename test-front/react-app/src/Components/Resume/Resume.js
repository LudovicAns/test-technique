import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Suggest from "./Suggest/Suggest";
import "./Resume.css";

export default function Resume() {
  const { id } = useParams();

  const apiKey = "ad2c28e0345278f3c8b002efddadf28f";
  const language = "fr-FR";
  const url = "https://api.themoviedb.org/3/movie/";
  const request = id + "?api_key=" + apiKey + "&language=" + language;
  const requestURL = url + request;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(requestURL)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  return (
    <div className="Resume">
      {movie && (
        <div className="resume-content">
          <div className="container">
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
            />
            <div className="container-text">
              <h1>{movie.title}</h1>
            <h2>{movie.release_date}</h2>
            <p>{movie.overview}</p>
            </div>
          </div>
          <h1>Suggestions à partir du film : {movie.title}</h1>
          <div className="suggest">
            <Suggest id={id} />
          </div>
        </div>
      )}
    </div>
  );
}
