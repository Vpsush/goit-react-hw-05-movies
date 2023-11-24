import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'additional/function';
import { defaultImg } from 'additional/const';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    fetchActors(movieId).then(({ cast }) => {
      setActors(cast);
      setIsLoading(false);
    });
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {actors.map(({ profile_path, id, name, character }) => (
        <div key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                : defaultImg
            }
            alt={`${name} portrait`}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
