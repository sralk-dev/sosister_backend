import React, { Component } from 'react'

export class Actions extends Component {
  render() {
    return (
      <ul className="action-item">
        <li><button><i className="fas fa-print"></i></button></li>
        <li><button><i className="fas fa-expand-arrows-alt"></i></button></li>
        <li className="action-share-hover"><button><i className="fas fa-share-alt"></i></button>
          <div className="action-share-wrap">
              <a href="#" title="facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" title="twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" title="linkedin"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" title="pinterest"><i className="fab fa-pinterest-p"></i></a>
              <a href="#" title="skype"><i className="fab fa-skype"></i></a>
              <a href="#" title="rss"><i className="fas fa-rss"></i></a>
          </div>
        </li>
      </ul>
    )
  }
}

export default Actions
