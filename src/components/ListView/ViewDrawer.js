import React, { Component } from 'react';

import './ViewDrawer.css';

class ViewDrawer extends Component {
  constructor(props) {
    super();
    this.query=props.query;
    this.radius=props.radius;
  }
}

const viewDrawer = props => (
    <nav className="view-drawer">
        <ul>
          <li>What do you want to do? {this.props.query}</li>
          <li>How how many meters do you want to walk? {this.props.radius}</li>
          <button className="btn btn-primary">Submit</button>
        </ul>
    </nav>
);


export default viewDrawer;
