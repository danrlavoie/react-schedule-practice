import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableHeaderRow from '../containers/TableHeaderRow';
import TableRow from './TableRow';

import { DEPARTURES_ENDPOINT } from '../constants/endpoints';

/**
 * Table: The component where all the transit data is displayed.
 * Contains a header row for column titles and rows for each route's data.
 */
class Table extends Component {

  /**
   * Called when the component has been assembled in the DOM.
   * Triggers data to be requested and loaded for rendering.
   * If we wanted, we could set an interval for polling the
   * departures endpoint to update the program state with new data.
   */
  componentDidMount() {
    this.props.loadDepartures(DEPARTURES_ENDPOINT);
  }

  render() {
    return(
    <div>
    <TableHeaderRow/>
    {this.props.rows.map(function(row, i) {
      return(
        <TableRow
          key={i}
          row={row}
        />
      )
    })}
    </div>
    );
  }
}

Table.propTypes = {
  rows: PropTypes.array,
  loadDepartures: PropTypes.func.isRequired
}

export default Table;