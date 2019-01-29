import React, { Component } from 'react';
import './App.css';
import routes from './routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="chart">
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
