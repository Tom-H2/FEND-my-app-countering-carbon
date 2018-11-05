import React, { Component } from 'react';

import './ViewDrawer.css';

class ViewDrawer extends Component {
  constructor(props) {
    super();
    this.query=props.query;//I want to reference query and radius on lines 58 and 59 in App.js
    this.radius=props.radius;
  }
}

const viewDrawer = props => (
    <nav className="view-drawer">
        <ul>
          <li className="query">What do you want to do?</li>
            <form className='form-query'>
              <fieldset className='field'>
                <input type='string' />
              </fieldset>
            </form>
          <li className="radius">How how many meters do you want to walk?</li>
          <form className='form-radius'>
            <fieldset>
              <input type='number' />
            </fieldset>
          </form>
          <button className="btn btn-primary">Submit</button>
        </ul>
    </nav>
);


export default viewDrawer;

// {this.props.query} cut from line 16
//{this.props.radius} cut from line 17
