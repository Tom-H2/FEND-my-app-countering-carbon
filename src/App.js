import React, { Component } from 'react';

import './App.css';
import Map from './components/Map';
import SquareAPI from './API/'

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: [12]
    };
  }
  //Closes open markers--changes in blue
  closeOpenMarkers = () => {
    const markers = this.state.markers.map(marker =>{
      marker.isOpen = false;
      marker.clickedOnMarker = false;
      return marker;
    });
    //resets state of markers
    this.setState({markers:Object.assign(markers, markers)})
  }

//Changes state when marker is clicked --green edits
openInfoWindowOnClick = (marker) => {
  const clickedVenue = this.state.venues.find(venue => venue.id===marker.id)
  //console.log(clickedVenue)
  SquareAPI.getVenueDetails(marker.id).then(results => {
    const mergedVenueData = Object.assign(clickedVenue, results.response.venue);
    this.setState({venues: Object.assign(this.state.venues, mergedVenueData)})
  })
  .catch(error => {
    this.setState({error})
    console.log(this.state.error)
  })
}


    componentDidMount() {
      SquareAPI.search({
        near:"Sequim, WA", //Sequim is a placeholder but will be near marker
        query: "Coffee",
        radius: 800,
        limit: 10
      }).then(results => {
        console.log(results);
      });
      };

  render() {
    return (
      <div className="App">
            <h1>Countering Carbon</h1>
            <h2>What to do while charging your EV</h2>
          <Map
          {...this.state}
          handleMarkerClick={this.handleMarkerClick}/>
      </div>
    );
  }
}

export default App;
