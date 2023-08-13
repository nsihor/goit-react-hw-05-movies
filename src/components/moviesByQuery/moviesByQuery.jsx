import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/services';
import MovieList from 'components/movieList/movieList';

const MoviesByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParam = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchMovieByQuery = async () => {
      try {
        const data = await getMovieByQuery(queryParam);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieByQuery();
  }, [queryParam, searchParams]);

  const updateQueryString = e => {
    const nextParams = e.target.value !== '' ? { query: e.target.value } : {};
    return setSearchParams(nextParams);
  };

  return (
    <>
      <label>
        <input
          style={{ marginLeft: '16px' }}
          type="text"
          value={queryParam}
          onChange={updateQueryString}
        />
      </label>
      <ul style={{ minHeight: '100vw' }}>
        {movies.map(movie => (
          <MovieList key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default MoviesByQuery;
