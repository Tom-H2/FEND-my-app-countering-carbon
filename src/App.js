import React, { Component } from 'react';

import './App.css';
import Map from './components/Map';
import Toolbar from './components/Toolbar';
import ViewDrawer from './components/ListView/ViewDrawer'
import SquareAPI from './API/'

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: [12],
      viewDrawerOpen: false
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

//function to open InfoWindow on click of marker--green edits
handleMarkerClick = (marker) => { //Code here written with help from Susan Pommer
  this.closeOpenMarkers()
  marker.isOpen = true;
  marker.clickedOnMarker = true;
  this.setState({markers: Object.assign(this.state.markers, marker)})
  this.openInfoWindowOnClick(marker);
}


    componentDidMount() {
      SquareAPI.search({
        near:"Port Angeles, WA", //Sequim is a placeholder but will be near marker
        query: "book",
        radius: 50000,
        limit: 10
      }).then(results => {
        console.log(results);
        const {venues} = results.response;
        console.log(venues);
        const markers = venues.map(venue => {
          return {
            lat: venue.location.lat,
            lng: venue.location.lng,
            id: venue.id,
            isOpen: false,
            isVisible: true, //Allows marker to be visible or to be hidden
            clickedOnMarker: false,
          };
        });
        this.setState({venues});
        this.setState({markers});
      })
      .catch(error => {
        this.setState({error});
      })
      }

      drawerToggleClickHandler = () => {
        this.setState((prevState) =>{
          return {viewDrawerOpen: !prevState.viewDrawerOpen};
        });
      };

      markerHardcodeClickHandler = () => {
        this.setState({viewDrawerOpen: true});
      }

  render() {
    let viewDrawer;

    if (this.state.viewDrawerOpen) {
      viewDrawer = <ViewDrawer />;

    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {viewDrawer}
        <main style={{marginTop: '64px'}}>
          <p>Park your EV, plug in, and explore on foot as far as you want!</p>
        </main>
          <Map
          {...this.state}
          handleMarkerClick={this.handleMarkerClick}
          click={this.mapClickHandler}/>
      </div>
    );
  }
}

export default App;
