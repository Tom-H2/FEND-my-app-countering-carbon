//https://www.youtube.com/watch?v=l6nmysZKHFU
import React from "react";
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div></div>
      <div className="toolbar_logo"><a href="/">Countering Carbon</a></div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
          <ul>
              <li><a href="/">Button for Query</a></li>
              <li><a href="/">Button for Radii</a></li>
          </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
