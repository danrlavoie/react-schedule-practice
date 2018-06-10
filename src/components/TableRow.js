import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 
 */
class TableRow extends Component {

  /**
   * Helper function to render table cells that use string data.
   * Will apply nice CSS classes and all that jazz.
   */
  renderStringCell() {

  }

  /**
   * Helper function to render table cells that use timestamp data.
   * Formats the data as a user-friendly time to match MBTA's boards.
   */
  renderTimeCell() {

  }

  /**
   * Helper function to render table cells that use numbers as data.
   * Will apply nice CSS classes and all that jazz.
   */
  renderNumberCell() {

  }
  /**
   * Helper function for rendering this component. Ideally, during the
   * process of requesting transit data, we correctly validate and sort
   * data into appropriate types (e.g. timestamp, number, string) when
   * putting them into the data store. This function assumes the data
   * in its row is already the correct type, and chooses the best function
   * to render each cell of the row.
   */
  renderRow() {
    return(
      <div
        className="table-row"
      >
        {this.props.row.map(function(cell, i) {
          console.log(typeof(cell));
          return(
            <div
              key={i}
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