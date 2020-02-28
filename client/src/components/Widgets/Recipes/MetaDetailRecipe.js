import React, { Component } from 'react'
import RatingStars from './RatingStars'

export class MetaDetailRecipe extends Component {

  render() {

    const {owner, date, qtyLikes, score} = this.props.info;

    return (
      <ul className="entry-meta">
        <li className="single-meta">
          <a href="#">
            <i className="far fa-calendar-alt"></i>{date}
          </a>
        </li>
        <li className="single-meta">
          <a href="#">
            <i className="fas fa-user"></i>by <span>{owner.name}</span>
          </a>
        </li>
        <li className="single-meta">
          <RatingStars score={score}/>
        </li>
        <li className="single-meta">
          <a href="#"><i className="fas fa-heart">
            </i><span>{qtyLikes}</span>Likes
          </a>
        </li>
      </ul>
    )
  }
}

export default MetaDetailRecipe
