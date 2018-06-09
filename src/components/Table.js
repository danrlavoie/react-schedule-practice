import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableHeaderRow from '../containers/TableHeaderRow';

class Table extends Component {
  constructor()  {
    super();
  }

  render() {
    return(
    <div>
    <TableHeaderRow
      headerRow={this.props.headerRow}
    >
    </TableHeaderRow>
    <div>{this.props.title}</div>
    </div>
    );
  }
}

Table.propTypes = {
  title: PropTypes.string,
  headerRow: PropTypes.array,
  rows: PropTypes.array
}

export default Table;