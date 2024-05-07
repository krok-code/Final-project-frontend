// import AuthPage from 'components/Auth/Auth';
// import EditProfileModal from '../Modals/EditProfileModal/EditProfileModal';

// import { Modal } from 'components/mainModal/MainModal';
// import NeedHelp from 'components/NeedHelp/NeedHelp';
// import NeedHelpModal from 'components/Modals/NeedHelpModals/NeedHelpModal';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       {/* <AuthPage /> */}
//       {/* <EditProfileModal /> */}
//       {/* <Modal /> */}
//       <NeedHelpModal />
//     </div>
//   );
// };

import { useEffect, useState, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentUser } from '../../redux/authorization/authReducer';
import { useAuth } from '../../hooks/useAuth';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictRoute';

import AuthPage from 'components/Auth/Auth';
import EditProfileModal from '../Modals/EditProfileModal/EditProfileModal';
import { Modal } from 'components/mainModal/MainModal';
import NeedHelp from 'components/NeedHelp/NeedHelp';
import NeedHelpModal from 'components/Modals/NeedHelpModals/NeedHelpModal';

const Welcome = lazy(() => import('../../pages/WelcomePg/WelcomePage'));
const HomePage = lazy(() => import('../../pages/Home/Home'));
const ScreensPage = lazy(() => import('../../pages/Home/ScreensPage'));
const Login = lazy(() => import('../Auth/LogInPg/LogInPg'));
const Registration = lazy(() => import('../Auth/RegistrationPg/RegistrationPg'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  function toggleTheme(e) {
    const themeValue = e.target.textContent;
    setCurrentTheme(themeValue);
    localStorage.setItem('theme', themeValue);
  }

  return isRefreshing ? (
    <div>Loading...</div>
  ) : (
    <ThemeProvider theme={{ mode: currentTheme }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/login" component={<Welcome />} />
            }
          />
          <Route
            path="home"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<HomePage toggleTheme={toggleTheme} />}
              />
            }
          >
            <Route path=":boardName" element={<ScreensPage />} />
          </Route>
          <Route
            path="/login"
            element={<RestrictedRoute component={<Login />} />}
          />
          <Route
            path="/register"
            element={<RestrictedRoute component={<Registration />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
