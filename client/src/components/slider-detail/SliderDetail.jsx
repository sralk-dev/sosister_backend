import React from 'react';

import Slider from '../slider';

import './SliderDetail.css';

const SliderItem = ({url}) => {
  return (
    <div className="ranna-slider-content-detail">
      <figure className="item-figure">
        <img src={url} alt="Banner"/>
      </figure>
    </div>
  )
}

const SliderDetail = ({images = []}) => {

  const renderData = images.map( (item) => <SliderItem key={item} url={item}/>);

  return (
    <Slider>
      {renderData}
    </Slider>
  )
}

export default SliderDetail
