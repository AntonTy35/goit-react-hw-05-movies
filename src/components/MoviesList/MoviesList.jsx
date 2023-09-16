import { NavLink, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <p>{movie.original_title}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MoviesList;
