import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieList({ filmder }) {
  return (
    <div className="movie-list">
      {filmder.length > 0 ? (
        filmder.map((element) => (
          <Link to={`/movies/${element.imdbID}`} key={element.imdbID} className="movie-card">
            <img src={element.Poster == "N/A" ? "https://avatars.mds.yandex.net/i?id=d20c70074f33b17ce2ad720acc8149b8_l-8220915-images-thumbs&n=13" : element.Poster} alt="film-img" />
            <div className="movie-info">
              <h3>{element.Title}</h3>
              <div>
                <p>{element.Year}</p>
                <span>*</span>
                <p>{element.Type === "movie" ? "film" : "serial"}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>Фильм табылмады, суранысты кайта жиберіп көр</p>
      )}
    </div>
  )
}

