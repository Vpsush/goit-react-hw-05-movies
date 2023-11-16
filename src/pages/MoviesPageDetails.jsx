// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useLocation, useParams, Link } from 'react-router-dom';
// import Loader from '../components/Loader/Loader';
// import Navigation from '../components/Navigation/Navigation';
// import { API_KEY, BASE_URL } from '../additional/const';
// import { defaultImg } from '../additional/const';
// // import { fetchMoviesDetails } from 'additional/function';

// const MoviesPageDetails = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   console.log('from', location);
//   const backLinkRef = useRef(location.state?.from ?? '/');

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         setIsLoading(true);
//         const { data } = await axios.get(
//           `${BASE_URL}/movie/${movieId}?language=en-US&api_key=${API_KEY}`
//         );
//         setMovieDetails(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId, setIsLoading, setMovieDetails]);

//   return (
//     <div>
//       <Link to={backLinkRef.current}>Go back</Link>
//       {error !== null && <p className="error-bage">{error}</p>}
//       {isLoading && <Loader />}
//       {movieDetails !== null && (
//         <div className="info">
//           <div>
//             <img
//               src={
//                 movieDetails.poster_path
//                   ? `https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`
//                   : defaultImg
//               }
//               alt={movieDetails.title}
//             />
//           </div>
//           <div>
//             <h2>{movieDetails.title}</h2>
//             <p>Rating: {Math.round(movieDetails.vote_average)}</p>
//             <h2>Overview</h2>
//             <p>{movieDetails.overview}</p>
//             <h2>Genres</h2>
//             <p>
//               {movieDetails.genres?.map(genre => (
//                 <li key={genre.id}>{genre.name}</li>
//               ))}
//             </p>
//           </div>
//         </div>
//       )}
//       <Navigation />
//     </div>
//   );
// };

// export default MoviesPageDetails;

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import Navigation from '../components/Navigation/Navigation';
import { API_KEY, BASE_URL } from '../additional/const';
import { defaultImg } from '../additional/const';

const MoviesPageDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${BASE_URL}/movie/${movieId}?language=en-US&api_key=${API_KEY}`
        );
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId, setIsLoading, setMovieDetails]);

  return (
    <div>
      <button onClick={() => navigate(backLinkRef.current)}>Go back</button>
      {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
      {movieDetails !== null && (
        <div className="info">
          <div>
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`
                  : defaultImg
              }
              alt={movieDetails.title}
            />
          </div>
          <div>
            <h2>{movieDetails.title}</h2>
            <p>Rating: {Math.round(movieDetails.vote_average)}</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres</h2>
            <ul>
              {movieDetails.genres?.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <Navigation />
    </div>
  );
};

export default MoviesPageDetails;
