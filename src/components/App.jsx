import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WelcomePage from '../pages/WelcomePage';
import NotFound from './NotFound/NotFound';
import PublicRoute from '../guards/PublicRoute';
import PrivateRoute from '../guards/PrivateRoute';
import AuthPage from '../pages/AuthPage';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';
import Loader from './Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      {/** Content inside this div must be wrapped in the theme component */}
      <Routes>
        <Route path='/' element={<WelcomePage />} />

        <Route
          path='/auth/:id'
          element={<PublicRoute redirectTo='/home' component={<AuthPage />} />}
        />

        <Route path='/home' element={<PrivateRoute redirectTo='/auth/login' />}>
          <Route path=':boardId' />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
