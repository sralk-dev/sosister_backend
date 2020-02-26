import React, { Component } from 'react'

export class MetaRecipe extends Component {
  render() {

    const {owner, mins, likes} = this.props;

    return (
      <ul class="entry-meta">
        <li><a href="#"><i class="fas fa-clock"></i>{mins} Mins</a></li>
        <li><a href="#"><i class="fas fa-user"></i>by <span>{owner}</span></a></li>
        <li><a href="#"><i class="fas fa-heart"></i><span>{likes}</span> Likes</a></li>
      </ul>
    )
  }
}

export default MetaRecipe
