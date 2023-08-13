import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/services';

const Review = () => {
  const [review, setReview] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        const data = await getMovieReviews(movieId);
        console.log('Review:', data);
        setReview(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieReview();
  }, [movieId]);
  return (
    <>
      <p>Review:</p>
      <ul>
        {review
          ? review.map(ar => (
              <li key={ar.id}>
                <p>Author: {ar.author}</p>
                <p>Review: {ar.content}</p>
              </li>
            ))
          : 'Sorry we can`t find Review'}
      </ul>
    </>
  );
};

export default Review;
