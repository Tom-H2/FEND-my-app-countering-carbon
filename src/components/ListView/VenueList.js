import React, {Component} from "react";

//import ListItem from "./ListItem"
import './VenueList.css';

class VenueList extends Component {

  componentWillReceiveProps=(props)=> {
    this.props = props
  }

  render () {
        return (
          <div>
            <ol className="venue-list">
              {this.props.venues && this.props.venues.map(venue =>
                <li
                  className="venue-name"
                  onClick={()=> this.props.venueClickHandler(venue)}
                  key={venue.id}>
                  {venue.name}
                </li>
              )}
            </ol>
          </div>
        );
    }
};

export default VenueList;
