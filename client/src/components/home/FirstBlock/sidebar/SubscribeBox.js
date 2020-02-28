import React, { Component } from 'react'

export class SubscribeBox extends Component {
  render() {
    return (
      <div className="widget">
        <div className="section-heading heading-dark">
          <h3 className="item-heading">SUBSCRIBE &amp; FOLLOW</h3>
        </div>
        <div className="widget-follow-us">
          <ul>
            <li className="single-item"><a href="#"><i className="fab fa-facebook-f"></i>LIKE ME ON</a></li>
            <li className="single-item"><a href="#"><i className="fab fa-twitter"></i>LIKE ME</a></li>
            <li className="single-item"><a href="#"><i className="fab fa-linkedin-in"></i>LIKE ME</a></li>
            <li className="single-item"><a href="#"><i className="fab fa-pinterest-p"></i>LIKE ME</a></li>
            <li className="single-item"><a href="#"><i className="fab fa-instagram"></i>LIKE ME</a></li>
            <li className="single-item"><a href="#"><i className="fab fa-youtube"></i>Subscribe</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SubscribeBox
