import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCards from './components/FlashCards';

class App extends Component {
  state = { cards: [ {front: 'What is 1 + 1?', answer: '2'}]}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Flash Cards</h2>
        </div>
        <FlashCards cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
