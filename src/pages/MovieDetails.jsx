import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import { BackLink } from '../components/BackLink';
import { SingleMovie } from 'components/SingleMovie/SingleMovie';
import { Loader } from 'components/Loader/Loader';

import { getMovieById } from '../api';

const Movies = () => {
  const location = useLocation();

  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getSingleMovie() {
      try {
        const movieDetails = await getMovieById(movieId);
        console.log(movieDetails);
        setMovie(movieDetails);
      } catch (error) {
        console.log(error);
      }
    }
    getSingleMovie();
  }, [movieId]);

  const backLinkHref = location?.state?.from ?? '/quizzes';

  return (
    <main>
      {movie && <SingleMovie singleMovie={movie} />}
      <BackLink to={backLinkHref}>Go back </BackLink>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;

// {/* <BackLink to="/movies">Back to Movies</BackLink> */}

// import { Suspense } from 'react';
// import { Link, Outlet } from 'react-router-dom';

// const MovieDetails = () => {
//   return (
//     <main>
//       <h1>About Us</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
//         dolorum illum voluptatum dolores! Quas perferendis quis alias excepturi
//         eaque voluptatibus eveniet error, nulla rem iusto?
//       </p>
//       <ul>
//         <li>
//           <Link to="cast">Cast</Link>
//         </li>
//         <li>
//           <Link to="reviews">Reviews</Link>
//         </li>
//       </ul>
//       <Suspense fallback={<div>Loading subpage...</div>}>
//         <Outlet />
//       </Suspense>
//     </main>
//   );
// };

// export default MovieDetails;
// genres;
// homepage;
// original_title;
// overview;

// poster_path;

// release_date;
// vote_average;
