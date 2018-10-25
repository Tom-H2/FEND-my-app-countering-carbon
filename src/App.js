import React, { Component } from 'react';

import './App.css';
import Map from './components/Map';
//import Search from './components/Search';
import SquareAPI from './API/'

class App extends Component {
    componentDidMount() {
      SquareAPI.search({
        near:"Sequim, WA",
        query: "Coffee",
        radius: 800,
        limit: 40
      }).then(response => console.log(response));
    }
  render() {
    return (
      <div className="App">
            <h1>Countering Carbon</h1>
            <h2>What to do while charging your EV</h2>
          <Map/>
          {/*<Route exact path="/Search" render={(() => (<Search updateBooks={this.updateBooks} books={this.state.books} />))}/>*/}
      </div>
    );
  }
}

export default App;
