import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class NavButtonLayer extends Component {
  render() {
    return (
      <nav className="site-nav">
        <ul id="site-menu" className="site-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Category</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
        </ul>
      </nav>
    )
  }
}

export default NavButtonLayer
