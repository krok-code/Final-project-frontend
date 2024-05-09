// import { useState } from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import Header from '../Header/Header';
// import ScreensPage from '../../components/ScreensPage/ScreensPage';

import { HomePageContainer, MainContainer } from './Home.styled';
// import { MainWrapper } from '../../components/ScreensPage/ScreensPage.styled';

const HomePage = () => {
  //   const [aside, setAside] = useState(false);
  //   const location = useLocation();

  //   const board = useSelector(state => state.currentBoardId); // Ensure correct state selection

  //   function handleAsideHide() {
  //     setAside(prevState => !prevState);
  //   }

  return (
    <HomePageContainer>
      <p> Sidebar component</p>
      <MainContainer>
        <Header />
        {/* <MainWrapper
        background={board ? board.background : 'default'}
        loc={location.pathname}
        >
          {location.pathname === '/home' ? <ScreensPage /> : <Outlet />}
        </MainWrapper> */}
      </MainContainer>
    </HomePageContainer>
  );
};

export default HomePage;
