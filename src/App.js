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
      filteredVenues: [],
      markers: [],
      filteredMarkers: [],
      center: [],
      zoom: [12],
      query: "",
      viewDrawerOpen: false
    };
  }
  //Closes open markers
  closeOpenMarkers = () => {
    const markers = this.state.markers.map(marker =>{
      marker.isOpen = false;
      marker.clickedOnMarker = false;
      return marker;
    });
    //resets state of markers
    this.setState({markers:Object.assign(markers, markers)})
  }

//Changes state when marker is clicked
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

//function to open InfoWindow on click of marker
handleMarkerClick = (marker) => { //Code here written with help from Susan Pommer
  this.closeOpenMarkers()
  marker.isOpen = true; //allows infoWindows to open
  marker.clickedOnMarker = true;
  this.setState({markers: Object.assign(this.state.markers, marker)});
  this.openInfoWindowOnClick(marker);
};

venueClickHandler = venue => { //function that connects venue click to call same action as marker click
  const marker = this.state.markers.find(marker => marker.id === venue.id);
  this.handleMarkerClick (marker);
  console.log(venue);
};

// function to filter markers on user entry in input box
filterOnQuery = event => {
  const query = event.target.value;
  this.setState({query})
  console.log(query) // REMOVE

  // no query
  if (query === "") {
    const filteredVenues = this.state.venues;
    this.setState({filteredVenues});

    const filteredMarkers = this.state.markers;
    this.setState({filteredMarkers});

    console.log({filteredVenues}); // TESTING - REMOVE
    console.log({filteredMarkers}); // TESTING - REMOVE
  }
  // when query entered
  else {
    // call filter function
    const filteredVenues = this.venueFilter(query);
    this.setState({filteredVenues});

    const filteredMarkers = this.markerFilter(query);
    this.setState({filteredMarkers})

    console.log({filteredVenues}); // TESTING - REMOVE
    console.log({filteredMarkers}); // TESTING - REMOVE
  }
}

  // filter master venue list based on query
  venueFilter = (query) => {
    // loop though Venue array to find Venues which have query string
    const filteredVenues = this.state.venues.filter(venue =>
      venue.name.toUpperCase().includes(query.toUpperCase())
    );
    return filteredVenues;
  };

  // change marker visibility for venues which do not match filter query
  markerFilter = (query) => {
    // map through filteredVenues to find venue names = query
    const filteredMarkers = this.state.venues.map(venue => {
      const match = venue.name.toUpperCase().includes(query.toUpperCase());
        const marker = this.state.markers.find(marker => marker.id === venue.id);
        // change marker's visibility if match
        if (match) {
          marker.isVisible = true;
        }
        else {
          marker.isVisible = false;
        }
        return marker;
    });
    return filteredMarkers
  }


    componentDidMount() {
      SquareAPI.search({ //sets the parameters for initial search
        near:"Port Angeles, WA", //these sets of data are not changed by the App
        query: "bar",
        radius: 1600,
        limit: 10
      }).then(results => {
        //console.log(results);
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

  render() { //allows access to the ViewDrawer component and sets state
    let viewDrawer;
    if (this.state.viewDrawerOpen) {
      viewDrawer = <ViewDrawer {...this.state}
                    venueClickHandler={this.venueClickHandler}
                    queryString={this.state.queryString}/>;

    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {viewDrawer}
        <main style={{marginTop: '64px'}}>
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
