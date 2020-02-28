import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="ranna-bg-dark">
          <div className="container">
            <Logo/>
            <Menu/>
            <div className="copyright">© All Right Reserved 2019</div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
