import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/index';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import HomePage from './components/HomePage';
import TrendingsPage from './components/TrendingsPage';
import SubscriptionsPage from './components/SubscriptionsPage';
import LibraryPage from './components/LibraryPage/'
import HistoryPage from './components/HistoryPage';
import YourVideosPage from './components/YourVideosPage';
import WatchLater from './components/WatchLaterPage';
import LikedVideosPage from './components/LikedVideosPage';
import LeftNav from './components/LeftNav';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector(({ session }) => session.user);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
    {user && <NavBar />}
    {/* {user && <LeftNav />} */}
      <Switch>
      {/* <ProtectedRoute path='/' exact={true} >
        <NavBar />
      </ProtectedRoute> */}
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path='/trending' exact={true} >
          <TrendingsPage />
        </ProtectedRoute>
        <ProtectedRoute path='/subscriptions' exact={true} >
          <SubscriptionsPage />
        </ProtectedRoute>
        <ProtectedRoute path='/library' exact={true} >
          <LibraryPage />
        </ProtectedRoute>
        <ProtectedRoute path='/history' exact={true} >
          <HistoryPage />
        </ProtectedRoute>
        <ProtectedRoute path='/my-videos' exact={true} >
          <YourVideosPage />
        </ProtectedRoute>
        <ProtectedRoute path='/watch-later' exact={true} >
          <WatchLater />
        </ProtectedRoute>
        <ProtectedRoute path='/liked-videos' exact={true} >
          <LikedVideosPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
