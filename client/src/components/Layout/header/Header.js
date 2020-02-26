import React, { Component } from 'react';
import NavButtonLayer from './NavButtonLayer';
import Logo from './Logo';
import LoginSection from './LoginSection';

export class Header extends Component {
  render() {
    return (
      <div>
        <header className="header-one">
          <div id="header-main-menu" className="header-main-menu header-sticky">
            <div className="container">                    
              <div className="row">
                <div className="col-lg-8 col-md-3 col-sm-4 col-4 possition-static">
                  <Logo/>
                  <NavButtonLayer/>
                </div>
                <LoginSection/>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
