import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({
  movie: { id, poster_path, original_title, original_name, title, name },
}) => {
  const location = useLocation();

  return (
    <li>
      {console.log(id)}
      {location.pathname.includes(id) ? (
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : 'https://dummyimage.com/300x450/616161/b5b5b5.jpg&text=Image+is+not+available'
          }
          alt={original_title ?? original_name}
        />
      ) : (
        <Link to={`/goit-react-hw-05-movies/movies/${id}`}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : 'https://dummyimage.com/300x450/616161/b5b5b5.jpg&text=Image+is+not+available'
            }
            alt={original_title ?? original_name}
          />
        </Link>
      )}
      <p>{title ?? name}</p>
    </li>
  );
};

MovieList.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    original_name: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default MovieList;
