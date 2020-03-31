import React from 'react';
import SlickSlider from 'react-slick';

import './Slider.css';

const SliderArrow = ({className, onClick, type}) => {
  
  const label = type === "prev" ? <i className="fas fa-chevron-left"></i> : <i className="fas fa-chevron-right"></i>;

  return <button 
            type="button" 
            className={className} 
            onClick={onClick}
          >
            {label}
          </button>
}

const Slider = ({children}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev"/>,
    nextArrow: <SliderArrow/>
  };

  return (
    <SlickSlider {...settings}>
      {children}
    </SlickSlider>
  )
}

export default Slider
