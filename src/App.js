import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import SquareAPI from './API/'

class App extends Component {
    componentDidMount() {
      SquareAPI.search({
        near:"Sequim, WA",
        query: "food",
        limit: 5
      }).then(results => console.log(results));
    }
  render() {
    return (
      <div className="App">
            <h1>Countering Carbon</h1>
          <Map/>
      </div>
    );
  }
}

export default App;
