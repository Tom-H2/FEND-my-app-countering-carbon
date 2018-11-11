import React, { Component } from 'react';

import './ViewDrawer.css';
import VenueList from './VenueList';

class ViewDrawer extends Component {

  state = {
    query: ""
  }

  updateQuery = (newQuery) => { //This code follows Doug Brown walkthrough https://www.youtube.com/watch?v=NVAVLCJwAAo&feature=youtu.be
      //this will save the new query string and pass it up
    this.setState({ query: newQuery});
  }

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
                      onChange={e => this
                        .updateQuery(e.target.value)}
                      value={this.state.query}
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
