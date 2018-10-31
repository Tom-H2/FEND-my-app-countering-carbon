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
  handleMarkerClick = (markers) => {
    markers.isOpen = true;
    this.setState({markers: Object.assign(this.set.markers, markers)})
  }

    componentDidMount() {
      SquareAPI.search({
        near:"Sequim, WA", //Sequim is a placeholder but will be near marker
        query: "Coffee",
        radius: 800,
        limit: 40
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
          handleMarkerClick={this.handleMarkerClick}/>
      </div>
    );
  }
}

export default App;
