import React, { Component } from 'react'

export class Logo extends Component {
  render() {
    return (
      <div className="site-logo-mobile">
        <a href="index.html" className="sticky-logo-light"><img src="img/logo-light.png" alt="Site Logo"/></a>
        <a href="index.html" className="sticky-logo-dark"><img src="img/logo-dark.png" alt="Site Logo"/></a>
      </div>
    )
  }
}

export default Logo
