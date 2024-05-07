import { useState, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../Header/Header';
// import Sidebar from './Sidebar';
import ScreensPage from '../../components/ScreensPage/ScreensPage';

import { HomePageContainer, MainContainer } from '../Home/Home.styled';
import { MainWrapper } from '../../components/ScreensPage/ScreensPage.styled';

const HomePage = () => {
  // const [aside, setAside] = useState(false);
  const location = useLocation();

  // const selectCurrentBoard = (state) => state.boards.boards.current;
  // const { board } = useSelector(selectCurrentBoard);

  // function handleAsideHide() {
  //   setAside(prevState => !prevState);
  // }

  return (
    <HomePageContainer>
      {/* <Sidebar aside={aside} handleAsideHide={handleAsideHide} /> */}
      <MainContainer>
        <Header />
        <MainWrapper
          // background={board ? board.background : 'default'}
          // loc={location.pathname}
        >
          {location.pathname === '/home' ? (
            <ScreensPage />
          ) : (
            <Suspense>
              <Outlet />
            </Suspense>
          )}
        </MainWrapper>
      </MainContainer>
    </HomePageContainer>
  );
};

export default HomePage;
