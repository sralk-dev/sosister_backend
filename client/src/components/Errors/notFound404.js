import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class notFound404 extends Component {
  render() {
    return (
      <section className="error-page-wrap padding-top-80 padding-bottom-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-content-box">
                <div className="error-figure-wrap">
                  <img src="img/figure/404.png" alt="404" className="img-fluid"/>
                  <div className="error-center-figure">
                    <img src="img/figure/404-middle.png" alt="404" className="img-fluid"/>
                  </div>
                </div>
                <h2 className="item-title">Sorry! Page Was Not Found</h2>
                <p className="item-details">The page you are looking is not available or has been removed.
                        Try going to Home Page by using the button below.</p>
                <Link to='/' className="item-btn">GO TO HOME PAGE</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default 404
