import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableRow extends Component {
  renderRow() {
    return(
      <div
        className="table-row"
      >
        {this.props.row.map(function(cell) {
          return(
            <div
              className="table-cell"
            >
              {cell}
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

this.propTypes = {
  row: PropTypes.array
}


export default TableRow;