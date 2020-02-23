import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Logo extends Component {
  render() {
    return (
      <div>
        <div class="footer-logo">
          <Link to="/"><img src="img/logo-light.png" class="img-fluid" alt="footer-logo"/></Link>
        </div>
      </div>
    )
  }
}

export default Logo
