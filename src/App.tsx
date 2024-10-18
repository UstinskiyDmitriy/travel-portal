import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MainButton from './components/button/MainButton';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header';
import Steps from './components/steps/Steps';
import MainTitles from './components/titles/MainTitles';
import TravelStories from './components/travel-stories/TravelStories';
import WelcomePage from './components/welcome-page/WelcomePage';
import './App.css';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <div className="main">
      <Header />
      <WelcomePage />
      <MainTitles title="3 STEPS TO THE PERFECT TRIP" />
      <Steps />
      <section className="carousel_section">
        <MainTitles title="POPULAR DESTINATIONS" />
        <Carousel />
        <div className="carousel_section_button">
          {isTabletOrMobile && <MainButton title="Find More" size="11" />}
          {isDesktop && (
            <MainButton title="Find More" size="24" url="/button-arrow.png" />
          )}
        </div>
      </section>
      <section>
        <MainTitles title="TRAVEL STORIES" />
        <TravelStories />
      </section>
    </div>
  );
}

export default App;