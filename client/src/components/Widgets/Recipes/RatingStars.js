import React, { Component } from 'react'

export class RatingStars extends Component {
  render() {

    const {score} = this.props;

    let stars = [];

    for (let i = 0; i < 5; i++){
      (i < score) ? stars.push(<li key={i} className="star-fill"><i className="fas fa-star"></i></li>) : stars.push(<li key={i} className="star-empty"><i className="fas fa-star"></i></li>)
    }

    return (
      <ul className="item-rating">
        {stars}
        <li><span>{score}<span> / 5</span></span> </li>
      </ul>
    )
  }
}

export default RatingStars
