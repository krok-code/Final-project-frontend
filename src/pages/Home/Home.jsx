import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ScreensPage from './ScreensPage';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Sidebar />
      <ScreensPage />
    </div>
  );
}

export default HomePage;
