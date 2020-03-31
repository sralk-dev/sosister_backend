import React from 'react';

import TrendingRecipes from './../trending-recipes';
import SliderHomePage from '../slider-home-page';

const HomePageContainer = () => {
  
  return (
    <div className="container">
      <SliderHomePage/>
      <div className="row gutters-60">
        <TrendingRecipes/>
      </div>
    </div>
  )
}

export default HomePageContainer;