import React from 'react';

import './ViewDrawer.css';

const viewDrawer = props => (
    <nav className="view-drawer">
        <ul>
          <li><a href="/">What do you want to do?</a></li>
          <li><a href="/">How far do you want to walk?</a></li>
          <button>Submit</button>
        </ul>
    </nav>
);

export default viewDrawer;
