import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import OfferPage from '../offer-page/offer-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../mocks/offers';

type AppProps = {
  offers: Offer[];
};

const isAuthorized = false;

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage offers={offers} />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute isAuthorized={isAuthorized}>
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path="/offer/:id"
          element={<OfferPage offers={offers} />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
