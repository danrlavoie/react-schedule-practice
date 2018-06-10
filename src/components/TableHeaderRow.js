import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Table.css';
import './TableHeaderRow.css';

class TableHeaderRow extends Component {

  renderRow() {
    return(
      <div
        className="table-row"
      >
        {this.props.headerRow.map(function(header) {
          return(
            <div
              className="table-cell header-cell"
            >
              {header}
            </div>
          )
        })}
      </div>
    );
  }

  render() {
    return this.renderRow();
  }
}

TableHeaderRow.propTypes = {
  headerRow: PropTypes.array
}

export default TableHeaderRow;