import React from 'react';
import { useParams } from 'react-router-dom';

const PageReviews = () => {
  const { moviesId } = useParams;
  return <div>reviews:{moviesId}</div>;
};

export default PageReviews;
