import React, { Component } from 'react';

import './ViewDrawer.css';
import VenueList from './VenueList';

class ViewDrawer extends Component {
  constructor(props) {
    super();
    this.state = {
      query: props.initialQuery,//I want to reference query and radius on lines 58 and 59 in App.js
      radius: props.initialRadius
    };
  }

  updateFilter() {
      this.setState = ({
          query: "book",
          radius: 800
    });
  }
}

    const viewDrawer = props => (
      <div className="sideBar">
        <nav className="view-drawer">
            <ul>
              <li className="query">Filter the List</li>
                <form className='form-query'>
                    <input type={"search"} id={"search"} placeholder={"Filter List"} />
                </form>
              <VenueList />
            </ul>
        </nav>
      </div>
    );


export default viewDrawer;

// {this.props.query} cut from line 16
//{this.props.radius} cut from line 17
