import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movie }) => {
  const location = useLocation();

  return (
    <li>
      {location.pathname.includes(movie.id) ? (
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : 'https://dummyimage.com/300x450/616161/b5b5b5.jpg&text=Image+is+not+available'
          }
          alt={movie.original_title ?? movie.original_name}
        />
      ) : (
        <Link to={`/goit-react-hw-05-movies/movies/${movie.id}`}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : 'https://dummyimage.com/300x450/616161/b5b5b5.jpg&text=Image+is+not+available'
            }
            alt={movie.original_title ?? movie.original_name}
          />
        </Link>
      )}
      <p>{movie.title ?? movie.name}</p>
    </li>
  );
};

export default MovieList;
