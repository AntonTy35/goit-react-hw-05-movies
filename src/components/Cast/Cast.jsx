import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCasts } from 'api';
import { Li, Ul } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCasts(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <Ul>
      {cast.length > 0
        ? cast.map(({ id, name, profile_path, character }) => (
            <Li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://placehold.jp/24/cccccc/ffffff/140x210.png?text=There is no photo`
                }
                alt="actor"
                loading="lazy"
                width={120}
                height={180}
              />
              <h4>{name}</h4>
              <p>Character: {character}</p>
            </Li>
          ))
        : "We don't have any cast for this movie."}
    </Ul>
  );
};

export default Cast;
