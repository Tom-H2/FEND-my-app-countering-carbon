import React, {
  Component
} from 'react';

import './ViewDrawer.css';
import VenueList from './VenueList';

class ViewDrawer extends Component {

  //prop changes trigger update to render
  componentWillReceiveProps = (props) => {
    this.props = props
  }
  //Renders the visual elements in the ViewDrawer so each venue appears there
  render() {
    return ( <
      aside className = "sideBar" >
      <
      nav className = "view-drawer" >
      <
      input tabIndex="2"
      type = "text"
      id = "filter"
      placeholder = "Filter Venues"
      onChange = {
        this.props.filterOnQuery
      }
      /> <
      ol className = "venue-list" >
      <
      VenueList { ...this.props
      }
      venueClickHandler = {
        this.props.venueClickHandler
      }
      /> <
      /ol> <
      em > Data Rendered from < a href = "https://developer.foursquare.com/docs/api/venues/search" > FourSquare < /a></em >
      <
      /nav> <
      /aside>
    );
  }
}
export default ViewDrawer;
