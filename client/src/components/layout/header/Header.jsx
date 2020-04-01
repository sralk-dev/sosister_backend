import React, {useRef} from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

const Header = () => {

  const toggleMenu = useRef(null);
  const menu = useRef(null);

  const toggleOnClick = () =>{
    toggleMenu.current.classList.toggle('active')
    menu.current.classList.toggle('active')
  }

  return (
    <header className="header-one">
      <div id="header-main-menu" className="header-main-menu header-sticky">
        <div className="container">                    
          <div className="row">
            <div className="col-lg-8 col-md-3 col-sm-4 col-4 justify-content-start">
              <nav ref={menu} className="site-nav">
                <ul id="site-menu" className="site-menu">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/category'>Category</Link></li>
                  <li><Link to='/recipes'>Recipes</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4 col-12 d-flex align-items-center justify-content-between">
                <div className="site-logo-mobile">
                  <a href="index.html" className="sticky-logo-light"><img src="assets/logo-light.png" alt="Site Logo"/></a>
                </div>
                <div className="d-flex  align-items-center ">
                  <div className="nav-action-elements-layout1">
                    <ul>
                        <li>
                          <button type="button" className="login-btn" data-toggle="modal" data-target="#myModal">
                            <i className="flaticon-profile"></i>Login
                          </button>
                        </li>
                        <li>
                          <a href="submit-recipe.html" className="fill-btn"><i className="flaticon-plus-1"></i>SUBMIT
                              RECIPE</a>
                        </li>
                    </ul>
                  </div>
                  <div ref={toggleMenu} className="mob-menu-open toggle-menu" onClick={toggleOnClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
