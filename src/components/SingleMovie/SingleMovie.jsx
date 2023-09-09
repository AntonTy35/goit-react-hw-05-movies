export const SingleMovie = ({ singleMovie }) => {
  const {
    backdropPath,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
  } = singleMovie;
  return (
    <>
      <img src={backdropPath} alt={original_title} width={150} />
      <h2>{original_title}</h2>
      <h3>Rating</h3>
      <p>{vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
      <h3>Release</h3>
      <p>{release_date}</p>
    </>
  );
};
