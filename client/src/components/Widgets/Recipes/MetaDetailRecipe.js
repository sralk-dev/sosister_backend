import React, { Component } from 'react'
import RatingStars from './RatingStars'

export class MetaDetailRecipe extends Component {

  render() {

    const {owner, date, qtyLikes, score} = this.props.info;

    return (
      <ul class="entry-meta">
        <li class="single-meta">
          <a href="#">
            <i class="far fa-calendar-alt"></i>{date}
          </a>
        </li>
        <li class="single-meta">
          <a href="#">
            <i class="fas fa-user"></i>by <span>{owner.name}</span>
          </a>
        </li>
        <li class="single-meta">
          <RatingStars score={score}/>
        </li>
        <li class="single-meta">
          <a href="#"><i class="fas fa-heart">
            </i><span>{qtyLikes}</span>Likes
          </a>
        </li>
      </ul>
    )
  }
}

export default MetaDetailRecipe
