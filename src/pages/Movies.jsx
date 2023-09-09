import { useSearchParams } from 'react-router-dom';
// import { ProductList } from '../components/ProductList';
import { SearchBox } from '../components/SearchBox/SearchBox';
// import { getMovies } from '../api';

const Movies = () => {
  // const movies = getMovies();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  // const visibleProducts = movies.filter(product =>
  //   product.name.toLowerCase().includes(productName.toLowerCase())
  // );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />
      {/* <MoviesList products={visibleProducts} /> */}
    </main>
  );
};

export default Movies;
