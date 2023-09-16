import { Link, useLocation } from 'react-router-dom';
import {
  Wrapper,
  Genres,
  Title,
  SubTitle,
  Paragraph,
} from './SingleMovie.styled';

export const SingleMovie = ({ singleMovie }) => {
  const { poster_path, title, vote_average, overview, genres, release_date } =
    singleMovie;
  const voteAverage = (vote_average * 10).toFixed(2);
  const location = useLocation();
  console.log('singleMovie', singleMovie);

  return (
    <main>
      <Wrapper>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://placehold.jp/24/cccccc/ffffff/220x280.png?text=There is no photo`
          }
          width={220}
          height={280}
          loading="lazy"
          alt="poster"
        />
        <div>
          <Title>{title}</Title>
          <SubTitle>User score: {voteAverage}%</SubTitle>
          <SubTitle>Overview</SubTitle>
          <Paragraph>{overview} </Paragraph>
          <SubTitle>Genres</SubTitle>
          <Genres>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </Genres>
          <SubTitle>Release</SubTitle>
          <Paragraph>{release_date} </Paragraph>
        </div>
      </Wrapper>
      <hr />
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
      <hr />
    </main>
  );
};
