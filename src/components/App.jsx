import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
const Layout = lazy(() => import('pages/layout'));
const Home = lazy(() => import('pages/home'));
const Movies = lazy(() => import('pages/movies'));
const MovieDetails = lazy(() => import('pages/movieDetails'));
const Cast = lazy(() => import('./cast/cast'));
const Review = lazy(() => import('./reviews/reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="goit-react-hw-05-movies/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h1>Error 404</h1> <Link to="goit-react-hw-05-movies/">Home</Link>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};
