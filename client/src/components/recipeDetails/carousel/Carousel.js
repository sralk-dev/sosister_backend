import React, { Component } from 'react'
import CarouselItem from './CarouselItem'

export class Carousel extends Component {
  render() {

    const images = this.props.images.map( (image, i) => <CarouselItem key={i} img={image}/> );

    return (
      <section className="single-recipe-main-banner">
        <div className="rc-carousel nav-control-layout4" data-loop="true" data-items="5" data-margin="5" data-autoplay="true"
            data-autoplay-timeout="5000" data-smart-speed="700" data-dots="false" data-nav="true" data-nav-speed="false"
            data-r-x-small="1" data-r-x-small-nav="true" data-r-x-small-dots="false" data-r-x-medium="1"
            data-r-x-medium-nav="true" data-r-x-medium-dots="false" data-r-small="1" data-r-small-nav="true"
            data-r-small-dots="false" data-r-medium="1" data-r-medium-nav="true" data-r-medium-dots="false"
            data-r-large="1" data-r-large-nav="true" data-r-large-dots="false" data-r-extra-large="1"
            data-r-extra-large-nav="true" data-r-extra-large-dots="false">
            <div className="item-figure">
              <img src="img/figure/single-banner5.jpg"alt="Banner"/>
            </div>
          </div>
      </section>
    )
  }
}

export default Carousel
