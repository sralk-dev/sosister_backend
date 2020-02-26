import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="ranna-bg-dark">
          <div class="container">
            <Logo/>
            <Menu/>
            <div class="copyright">© All Right Reserved 2019</div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
