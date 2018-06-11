//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

//eslint-disable-next-line no-unused-vars
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
        {
          // At the moment, we only render one table here which loads the departures.
          // However, it would be easy to create a second table, and a slight refactor
          // to the actions would allow us to have a departures and an arrivals table.
        }
      </div>
    );
  }
}

export default connect()(App);
