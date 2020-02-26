import React, { Component } from 'react'

export class Logo extends Component {
  render() {
    return (
      <div class="col-lg-4 d-none d-lg-block">
        <div class="site-logo-desktop">
          <a href="index.html" class="main-logo"><img src="img/logo-dark.png" alt="Site Logo"/></a>
        </div>
      </div>
    )
  }
}

export default Logo
