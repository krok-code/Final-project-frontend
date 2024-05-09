// import { useState } from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import { useTheme } from '@mui/material';
import Header from '../Header/Header';
// import ScreensPage from '../../components/ScreensPage/ScreensPage';

import { HomePageContainer, MainContainer } from './Home.styled';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../assets/theme/theme';

import Board from 'pages/ScreensPage/Board/Board';
// import { MainWrapper } from '../../components/ScreensPage/ScreensPage.styled';

const HomePage = () => {
  const theme = useTheme();
  //   const [aside, setAside] = useState(false);
  //   const location = useLocation();

  //   const board = useSelector(state => state.currentBoardId); // Ensure correct state selection

  //   function handleAsideHide() {
  //     setAside(prevState => !prevState);
  //   }

  return (
    <ThemeProvider theme={darkTheme}>
      <HomePageContainer>
        <MainContainer>
          <Header /> <Board />
          {/* <MainWrapper
        background={board ? board.background : 'default'}
        loc={location.pathname}
        >
          {location.pathname === '/home' ? <ScreensPage /> : <Outlet />}
        </MainWrapper> */}
        </MainContainer>
      </HomePageContainer>
    </ThemeProvider>
  );
};

// export default HomePage;
