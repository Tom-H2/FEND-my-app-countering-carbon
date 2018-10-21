import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map';

class App extends Component {
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
