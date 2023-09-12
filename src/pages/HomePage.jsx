import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingList } from 'api';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    async function getMoviesToday() {
      try {
        setLoading(true);
        const { results } = await getTrendingList();
        console.log('results ', results);
        const trendingList = results.map(({ id, title }) => ({
          id,
          title,
        }));

        setTrending(trendingList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getMoviesToday();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {loading ? (
        <div>LOADING...</div>
      ) : (
        <ul>
          {trending.map(({ id, title }) => {
            return (
              <li key={id}>
                {
                  <Link to={`/movies/${id}`} state={{ from: location }}>
                    <p>{title}</p>
                  </Link>
                }
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
};

export default Home;
