import React from 'react';

import TrendingRecipes from './../trending-recipes';
import SliderHomePage from '../slider-home-page';
import Sidebar from '../layout/sidebar';
import FollowUs from '../widgets/follow-us';

const HomePageContainer = () => {
  
  return (
    <div className="container">
      <SliderHomePage/>
      <div className="row gutters-60">
        <TrendingRecipes/>
        <Sidebar>
          <FollowUs/>
        </Sidebar>
      </div>
    </div>
  )
}

export default HomePageContainer;