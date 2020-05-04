import React from 'react';

import './RecipeFeature.css';

const RecipeFeature = ({preptime, cooktime, serving, views}) => {
  return (
    <div>
      <div className="item-feature">
        <ul>
          <li>
            <div className="feature-wrap">
                <div className="media">
                  <div className="feature-icon">
                    <i className="far fa-clock"></i>
                  </div>
                  <div className="media-body space-sm">
                    <div className="feature-title">PREP TIME</div>
                    <div className="feature-sub-title">{preptime} Mins</div>
                  </div>
                </div>
            </div>
          </li>
          <li>
            <div className="feature-wrap">
              <div className="media">
                <div className="feature-icon">
                  <i className="fas fa-utensils"></i>
                </div>
                <div className="media-body space-sm">
                  <div className="feature-title">COOK TIME</div>
                  <div className="feature-sub-title">{cooktime} Mins</div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="feature-wrap">
              <div className="media">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="media-body space-sm">
                  <div className="feature-title">SERVING</div>
                  <div className="feature-sub-title">{serving} People</div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="feature-wrap">
              <div className="media">
                <div className="feature-icon">
                  <i className="far fa-eye"></i>
                </div>
                <div className="media-body space-sm">
                  <div className="feature-title">VIEWS</div>
                  <div className="feature-sub-title">{views}</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RecipeFeature
