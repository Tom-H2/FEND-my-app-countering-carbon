//https://www.youtube.com/watch?v=l6nmysZKHFU
import React from "react";
import ViewToggleButton from './ListView/ViewToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <ViewToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar_logo">Countering Carbon</div>
      <div className="spacer"></div>
    </nav>
  </header>
);

export default toolbar;
