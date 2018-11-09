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
            <ol className="coffeeList">
              Venues Go Here
              {this.props.venues && this.props.venues.map(venue =>
                <li
                  className="coffeeName"
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
