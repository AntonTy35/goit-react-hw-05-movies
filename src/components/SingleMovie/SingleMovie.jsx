import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const SingleMovie = ({ singleMovie }) => {
  const { poster_path, title, vote_average, overview, genres, release_date } =
    singleMovie;
  const voteAverage = (vote_average * 10).toFixed(2);
  const location = useLocation();
  console.log('singleMovie', singleMovie);
  return (
    <main>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width={220}
          height={280}
          loading="lazy"
          alt="poster"
        />
        <div>
          <h2>{title}</h2>
          <h3>User score: {voteAverage}%</h3>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h3>Genres</h3>
          <ul>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
          <h3>Release</h3>
          <p>{release_date} </p>
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast" state={{ ...location.state }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ ...location.state }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
