import React, {Component} from "react";

//import ListItem from "./ListItem"

class VenueList extends Component {

  componentWillReceiveProps=(props)=> {
    this.props = props
  }

  render () {
        return (
          <div>
            <ol className="coffeeList">
              {this.props.venues && this.props.venues.map(venue =>
                <li
                  className="coffeeName"
                  key={venue.id}>
                  {venue.name}
                </li>
              )}
              console.log(venue.name);
            </ol>
          </div>
        );
    }
};

export default VenueList;
