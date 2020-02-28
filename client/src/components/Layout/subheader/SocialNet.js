import React, { Component } from 'react'

export class SocialNet extends Component {
  render() {
    return (
      <div className="col-lg-4 d-none d-lg-block">
        <div className="nav-action-elements-layout2">
          <ul className="nav-social">
            <li><a href="#" title="facebook"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#" title="twitter"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#" title="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="#" title="pinterest"><i className="fab fa-pinterest-p"></i></a></li>
            <li><a href="#" title="skype"><i className="fab fa-skype"></i></a></li>
            <li><a href="#" title="rss"><i className="fas fa-rss"></i></a></li>
            <li><a href="#" title="google-plus"><i className="fab fa-google-plus-g"></i></a></li>
          </ul>
        </div>
    </div>
    )
  }
}

export default SocialNet
