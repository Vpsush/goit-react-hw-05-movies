import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'additional/function'; // Assuming the correct function is fetchReview

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReview(movieId)
      .then(({ results }) => {
        setReviews(results);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
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
      {reviews.map(({ id, author, content }) => (
        <div key={id}>
          <p>{author}</p>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
