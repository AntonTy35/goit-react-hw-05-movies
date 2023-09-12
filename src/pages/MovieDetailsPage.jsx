import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { BackLink } from '../components/BackLink';
import { SingleMovie } from 'components/SingleMovie/SingleMovie';

import { getMovieById } from '../api';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/';

  useEffect(() => {
    async function getSingleMovie() {
      try {
        const movieDetails = await getMovieById(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.log(error);
      }
    }
    getSingleMovie();
  }, [movieId]);

  return (
    <main>
      <SingleMovie singleMovie={movie} />
      <BackLink to={backLinkHref}>Go back </BackLink>

      <Outlet />
    </main>
  );
};

export default MoviesDetails;
