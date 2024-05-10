// import { useState } from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import { useTheme } from '@mui/material';
import Header from '../Header/Header';
// import ScreensPage from '../../components/ScreensPage/ScreensPage';

import { HomePageContainer, MainContainer } from './Home.styled';
import { ThemeProvider } from 'styled-components';
// import { selectTheme } from '../../redux/selectors';

import Board from 'pages/ScreensPage/Board/Board';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import {
//   getDashboardById,
//   getAllDashboards,
// } from '../../redux/cards/cardsReducers';
// import { useEffect } from 'react';

const HomePage = () => {
  const theme = useTheme();

  //   const activeUserTheme = useSelector(selectTheme);
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   const selectThemeIndex = () => {
  //     if (activeUserTheme === 'dark') {
  //       return 0;
  //     } else if (activeUserTheme === 'light') {
  //       return 1;
  //     } else if (activeUserTheme === 'violet') {
  //       return 2;
  //     }
  //   };
  //   useEffect(() => {
  //     dispatch(getAllDashboards()).then(data => {
  //       if (data.payload.length === 0) {
  //         return;
  //       }

  //       dispatch(getDashboardById(data.payload[0]._id));
  //       navigate(`/home/${data.payload[0].name}`);
  //     });
  //   }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <HomePageContainer>
        <MainContainer>
          <Header /> <Board />
        </MainContainer>
      </HomePageContainer>
    </ThemeProvider>
  );
};

export default HomePage;
