import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Table from './containers/Table';

/**
 * App: The main application component.
 * Renders a header and the transit info table.
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BOSTON STATION INFORMATION</h1>
        </header>
        <Table/>
      </div>
    );
  }
}

export default connect()(App);
