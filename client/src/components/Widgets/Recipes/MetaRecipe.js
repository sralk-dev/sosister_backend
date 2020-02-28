import React, { Component } from 'react'

export class MetaRecipe extends Component {
  render() {

    const {owner, mins, likes} = this.props;

    return (
      <ul className="entry-meta">
        <li><a href="#"><i className="fas fa-clock"></i>{mins} Mins</a></li>
        <li><a href="#"><i className="fas fa-user"></i>by <span>{owner}</span></a></li>
        <li><a href="#"><i className="fas fa-heart"></i><span>{likes}</span> Likes</a></li>
      </ul>
    )
  }
}

export default MetaRecipe
