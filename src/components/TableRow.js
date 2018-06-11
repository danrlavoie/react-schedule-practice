//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusClassConstants } from '../constants/statusClasses';

import './Table.css';
import './TableRow.css';

/**
 * 
 */
class TableRow extends Component {
  /**
   * Helper function to render table cells that use string data.
   * Will apply nice CSS classes and all that jazz.
   * @param {*} data the data to render in the cell
   * @param {*} key a unique identifier for the cell
   */
  renderStringCell(data, key) {
    let classes = 'table-cell text';
    if (StatusClassConstants.NORMAL_STRINGS.includes(data)) {
      classes += ' normal';
    }
    else if (StatusClassConstants.ABNORMAL_STRINGS.includes(data)) {
      classes += ' abnormal';
    }
    else if (StatusClassConstants.ALERT_STRINGS.includes(data)) {
      classes += ' alert';
    }
    return(
      <div
        key={key}
        className={classes}
      >
        {data}
      </div>
    );
  }

  /**
   * Helper function to format a datetime string into human readable time
   * @param {Date} date the date to parse into a string
   * @returns {String} a formatted HH:MM XM time string 
   */
  humanReadableTime(date) {
    // Now, I could use toLocaleTimeString here, but that doesn't quite
    // match the format of HH:MM AM.
    // So we'll make our own string.
    const hours = date.getHours() > 11
      ? (date.getHours() - 12).toString()
      : date.getHours() === 0
        ? '12'
        : date.getHours().toString();
    const minutes = date.getMinutes() < 10
      ? '0' + date.getMinutes().toString()
      : date.getMinutes().toString();
    const em = date.getHours() > 11
      ? 'PM'
      : 'AM';
    const dateString = hours + ':' + minutes + ' ' + em;
    return dateString;
  }

  /**
   * Helper function to render table cells that use timestamp data.
   * Formats the data as a user-friendly time to match MBTA's boards.
   * @param {*} data the data to render in the cell
   * @param {*} key a unique identifier for the cell
   */
  renderDateCell(data, key) {
    let classes = 'table-cell date';
    // Multiply by 100 to convert to millisecond notation for JS Date
    const date = new Date(parseInt(data)*1000);

    return(
      <div
        key={key}
        className={classes}
      >
        {this.humanReadableTime(date)}
      </div>
    );
  }

  /**
   * Helper function to render table cells that use numbers as data.
   * Will apply nice CSS classes and all that jazz.
   * @param {*} data the data to render in the cell
   * @param {*} key a unique identifier for the cell
   */
  renderNumberCell(data, key) {
    let classes = 'table-cell number';
    // Maybe we'll need to do something with train numbers later
    // (like link them to a profile or something) but for now this
    // function is essentially a pass-through.
    return(
      <div
        key={key}
        className={classes}
      >
        {data}
      </div>
    );
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
        className= 'table-row'
      >
        {this.props.row.map(function(cell, i) {
          if (/^[\d]{10}$/.test(cell)) {
            return this.renderDateCell(cell, i);
          }
          else if (/^[\d]+$/.test(cell)) {
            return this.renderNumberCell(cell, i);
          }
          else {
            return this.renderStringCell(cell, i);
          }
        }, this)}
      </div>
    );
  }

  render() {
    return this.renderRow();
  }
}

this.propTypes = {
  row: PropTypes.array
};


export default TableRow;