import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ask A Geek!</h2>
        </div>
        <p className="App-intro">
          Welcome to Ask A Geek! Got a geek-y question? Ask it and I will think about answering you. No garuntees.
        </p>
      </div>
    );
  }
}

export default App;
