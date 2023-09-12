import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchBox } from 'components/SearchBox/SearchBox';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

import { getMovies } from 'api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const findMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await getMovies(movieName);
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findMovies();
  }, [movieName]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox movieName={movieName} onChange={updateQueryString} />
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
    </main>
  );
};

export default Movies;
