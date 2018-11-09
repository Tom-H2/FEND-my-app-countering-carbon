import React, { Component } from 'react';

import './ViewDrawer.css';
import VenueList from './VenueList';

class ViewDrawer extends Component {
  //prop changes trigger update to render
  componentWillReceiveProps=(props)=> {
    this.props = props
  }


  render() {
    return (
      <div className="sideBar">
        <nav className="view-drawer">
                    <input
                      type="search"
                      id="search"
                      placeholder="Filter Venues"
                    />
            <ol className="coffeeList">
              <VenueList {...this.props}/>
            </ol>
        </nav>
      </div>
    );
  }
}
export default ViewDrawer;

// {this.props.query} cut from line 16
//{this.props.radius} cut from line 17
