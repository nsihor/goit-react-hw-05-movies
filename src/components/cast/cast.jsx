import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/services';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieCast();
  }, [movieId]);
  return (
    <>
      <p>Cast:</p>
      <ul>
        {cast
          ? cast.map(actor => <li key={actor.id}>{actor.name}</li>)
          : 'Sorry we can`t find cast'}
      </ul>
    </>
  );
};

export default Cast;
