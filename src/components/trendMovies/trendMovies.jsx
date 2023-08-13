import { useState, useEffect } from 'react';
import { getDayTrendMovies } from 'services/services';
import MovieList from 'components/movieList/movieList';

const TrendMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await getDayTrendMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieCast();
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <MovieList key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default TrendMovies;
