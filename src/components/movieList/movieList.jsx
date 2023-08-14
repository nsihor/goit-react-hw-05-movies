import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const MovieList = ({
  movie: { id, poster_path, original_title, original_name, title, name },
}) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return (
    <li>
      {location.pathname.includes(id) ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link to={backLinkLocationRef.current}>Back</Link>
          <img
            width={500}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://dummyimage.com/300x450/616161/b5b5b5.jpg&text=Image+is+not+available'
            }
            alt={original_title ?? original_name}
          />
        </div>
      ) : (
        <Link to={`/movies/${id}`} state={{ from: location }}>
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
    id: PropTypes.number,
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    original_name: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default MovieList;
