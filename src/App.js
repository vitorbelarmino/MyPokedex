import React from 'react';
import './App.css';
import Pokemon from './Pokemon';


class App extends React.Component {
  render() {
    return (
      <main className="pokedex">
          <h1>Pokedex</h1>
          <Pokemon />
      </main>
    );
  }
}

export default App;