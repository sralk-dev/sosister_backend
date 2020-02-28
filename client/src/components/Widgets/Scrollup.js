import React, { Component } from 'react';
import {animateScroll as scroll} from 'react-scroll';

export class Scrollup extends Component {

  scrollToTop(e){
    e.preventDefault();
    scroll.scrollToTop();
  }

  render() {
    return (
      <a onClick={this.scrollToTop} href='#' data-type="section-switch" className="scrollup">
        <i className="fas fa-angle-double-up"></i>
      </a>
    )
  }
}

export default Scrollup
