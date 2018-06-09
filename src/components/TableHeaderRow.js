import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableHeaderRow extends Component {
  constructor()  {
    super();
  }

  renderRow() {
    console.log(this.props.headerRow);//eslint-disable-line no-console
    return(
      this.props.headerRow.map(function(header) {
        return <div>{header}</div>
      })
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