import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Layout = lazy(() => import('pages/layout'));
const Home = lazy(() => import('pages/home'));
const Movies = lazy(() => import('pages/movies'));
const MovieDetails = lazy(() => import('pages/movieDetails'));
const Cast = lazy(() => import('./cast/cast'));
const Review = lazy(() => import('./reviews/reviews'));
const Error404 = lazy(() => import('../pages/error/error'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
