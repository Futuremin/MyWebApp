import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.log("Error fetching movie details:", error);
      });
  }, [id]);

  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>Director: {movie.director}</p>
          <p>Year: {movie.year}</p>
          <p>Genre: {movie.genre}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MovieDetails;
