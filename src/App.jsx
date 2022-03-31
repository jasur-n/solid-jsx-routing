import { lazy } from "solid-js";
import { Route, Routes } from "solid-app-router";

import { Layout } from "./layout/Layout";

const HomePage = lazy(() => import("./pages/Home"));
const MoviesPage = lazy(() => import("./pages/Movies"));
const TVPage = lazy(() => import("./pages/TV"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/[movieId]"));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/tv" element={<TVPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          {/* <Route path="/:page" /> */}
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/*all" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
