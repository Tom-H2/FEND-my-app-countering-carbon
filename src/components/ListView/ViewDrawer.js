import React, { Component } from 'react';

import './ViewDrawer.css';
import VenueList from './VenueList';

class ViewDrawer extends Component {

  //prop changes trigger update to render
  componentWillReceiveProps = (props) => {
    this.props = props
  }


  render() {
    return (
      <aside className="sideBar">
        <nav className="view-drawer">
                    <input
                      type="text"
                      id="filter"
                      placeholder="Filter Venues"
                      onChange={this.props.filterOnQuery}
                    />
            <ol className="venue-list">
              <VenueList {...this.props} venueClickHandler={this.props.venueClickHandler}/>
            </ol>
            <em>Data Rendered from <a href="https://api.foursquare.com/v2">FourSquare</a></em>
        </nav>
      </aside>
    );
  }
}
export default ViewDrawer;

// {this.props.query} cut from line 16
//{this.props.radius} cut from line 17
