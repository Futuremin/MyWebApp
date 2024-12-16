import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.log("Error fetching movies:", error);
      });
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>
            <a href={`/movies/${movie._id}`}>{movie.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
