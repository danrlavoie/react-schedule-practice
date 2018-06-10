import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Table.css';
import './TableHeaderRow.css';

/**
 * TableHeaderRow: Displays the text contents of the first row of transit data.
 * Ideally we have a handshake when loading data that confirms that what we
 * receive is correctly formatted, so this component assuems its data is textual.
 */
class TableHeaderRow extends Component {

  /**
   * Helper function for rendering the component.
   * Renders the divs for the given header data.
   */
  renderRow() {
    return(
      <div
        className="table-row"
      >
        {this.props.headerRow.map(function(header, i) {
          return(
            <div
              key={i}
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