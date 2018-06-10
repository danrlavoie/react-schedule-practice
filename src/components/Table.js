import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableHeaderRow from '../containers/TableHeaderRow';
import TableRow from './TableRow';

import { DEPARTURES_ENDPOINT } from '../constants/endpoints';

class Table extends Component {
  constructor()  {
    super();
  }

  componentDidMount() {
    this.props.loadCSV(DEPARTURES_ENDPOINT);
  }

  render() {
    return(
    <div>
    <div>{this.props.title}</div>
    <TableHeaderRow
      headerRow={this.props.headerRow}
    >
    </TableHeaderRow>
    {this.props.rows.map(function(row) {
      return(
        <TableRow
          row={row}
        />
      )
    })}
    </div>
    );
  }
}

Table.propTypes = {
  title: PropTypes.string,
  headerRow: PropTypes.array,
  rows: PropTypes.array,
  loadCSV: PropTypes.func.isRequired
}

export default Table;