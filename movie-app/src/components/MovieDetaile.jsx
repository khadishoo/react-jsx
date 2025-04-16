import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function MovieDetaile() {
  let { id } = useParams()

  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  console.log(movie);
  
  useEffect(()=>{
    async function fetchData () {
      try {
        let response = await axios.get(`https://www.omdbapi.com/?apikey=17dec6d0&i=${id}&plot=full`)
        if (response.status == 200 || response.status == 201 ) {
          setMovie(response.data)
          setIsLoading(false)
        }
      } catch (err) {
        console.error(err.message)
        setIsLoading(false)
        setError(err.message)
      }
    }
    fetchData()
  },[id])

  if (isLoading) return <p>Загрузка...</p>

  if(error) return <p style={{color: "red"}}>{error}</p>

  return (
    <div className="container">
      <div className="image-box">
        <img 
          src={movie.Poster == "N/A" ? 
            "https://avatars.mds.yandex.net/i?id=d20c70074f33b17ce2ad720acc8149b8_l-8220915-images-thumbs&n=13" 
            : movie.Poster
          }
          alt="detail" 
        />
      </div>
      <div className="detailed-info">
        <h1 className="movie-title">
          {movie.Title} <span className="movie-year">({movie.Year})</span>
        </h1>
        <ul className="movie-details">
          <li>imdb: {movie.imdbRating}</li>
          <li>{movie.Runtime}</li>
          <li>{movie.Rated}</li>
        </ul>
        <p className="movie-plot">{movie.Plot}</p>
        <div className="movie-extra">
          <div>
            <h3 className="section-title">Режиссёр</h3>
            <p className="section-content">{movie.Director}</p>
          </div>
          <div>
            <h3 className="section-title">Актёры</h3>
            <p className="section-content">{movie.Actors}</p>
          </div>
          <div>
            <h3 className="section-title">Жанр</h3>
            <p className="section-content">{movie.Genre}</p>
          </div>
        </div>
        <div>
          <Link to={'/'} className="back-link">
            Назад к поиску
          </Link>
        </div>
      </div>
    </div>
  )
}
