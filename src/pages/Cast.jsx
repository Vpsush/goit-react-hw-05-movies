// import React from 'react';
// import { useParams } from 'react-router-dom';

// const Cast = () => {
//   const { moviesId } = useParams;
//   return <div>reviews:{moviesId}</div>;
// };

// export default Cast;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_KEY = 'c22cf15536964c1cf38cb65c76fb41a1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const PageActors = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const { data } = await axios.get(
          `movie/${movieId}/credits?api_key=${API_KEY}`
        );
        setActors(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActors();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {actors.map(actor => (
        <div key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
            alt={`${actor.name} portrait`}
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </div>
      ))}
    </div>
  );
};

export default PageActors;
