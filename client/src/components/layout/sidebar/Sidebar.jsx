import React from 'react';

import './Sidebar.css';

const Sidebar = ({children}) => {
  return (
    <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
      {children}
    </div>
  )
}

export default Sidebar
