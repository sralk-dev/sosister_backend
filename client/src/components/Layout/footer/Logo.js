import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Logo extends Component {
  render() {
    return (
      <div>
        <div className="footer-logo">
          <Link to="/"><img src="img/logo-light.png" className="img-fluid" alt="footer-logo"/></Link>
        </div>
      </div>
    )
  }
}

export default Logo
