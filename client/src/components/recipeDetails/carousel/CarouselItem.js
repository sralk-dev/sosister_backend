import React, { Component } from 'react'

export class CarouselItem extends Component {
  render() {
    return (
      <div className="item-figure">
        <img src={this.props.img} alt="Banner"/>
      </div>
    )
  }
}

export default CarouselItem
