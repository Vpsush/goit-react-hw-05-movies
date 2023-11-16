import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { API_KEY, BASE_URL } from 'additional/const';
import { fetchReview } from 'additional/function';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState(null);

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  //       );
  //       setReviews(data.results);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchReviews();
  // }, [movieId]);

  useEffect(() => {
    fetchReview(movieId).then(({ review }) => {
      setReviews(review);
      setIsLoading(false);
    });
  }, [movieId]);

  return reviews.length === 0 ? (
    <h3>No Reviews.</h3>
  ) : (
    <div>
      <h2>Reviews</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {reviews.map(review => (
        <div key={review.id}>
          <p>{review.author}</p>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
