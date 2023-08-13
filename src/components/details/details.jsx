import { getMovieDetails } from 'services/services';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import MovieList from 'components/movieList/movieList';

const Details = () => {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  return (
    <div style={{ paddingLeft: '16px' }}>
      <p>Details</p>
      <MovieList movie={movie} />
      <Link style={{ marginRight: '16px' }} to="cast">
        Cast
      </Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default Details;
