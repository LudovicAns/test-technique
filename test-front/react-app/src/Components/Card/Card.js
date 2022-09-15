import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Card.css'

export default function Card(props) {

  const movie = props.movie;
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/resume/' + movie.id)} className='Card'>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />
    </div>
  )
}