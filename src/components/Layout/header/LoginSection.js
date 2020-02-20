import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class LoginSection extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-9 col-sm-8 col-8 d-flex align-items-center justify-content-end">
        <div className="nav-action-elements-layout1">
          <ul>
            <li>
              <button type="button" className="login-btn" data-toggle="modal" data-target="#myModal">
                  <i className="flaticon-profile"></i>Login
              </button>
            </li>
            <li>
              <Link to="new-recipe" className="fill-btn"><i className="flaticon-plus-1"></i>SUBMIT RECIPE</Link>
            </li>
          </ul>
        </div>
        <div className="mob-menu-open toggle-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    )
  }
}

export default LoginSection
