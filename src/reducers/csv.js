
/**
 * Adjusts the application state where it relates to the CSV
 * data being loaded into the program.
 * @param {*} state the application state, maintained with Redux
 * @param {*} action an action dispatched with a payload
 */
const csv = (state = [], action) => {
  switch (action.type) {
  case 'REQUEST_DEPARTURES':
    return Object.assign({}, state, {
      departure_request: 'requested'
    });
  case 'REQUEST_DEPARTURES_SUCCESS':
    return Object.assign({}, state, {
      departure_request: 'success',
      headerRow: action.csvData.data[0],
      bodyRows: action.csvData.data.slice(1)
      // TODO: It looks like the TimeStamp column is something we might not want to
      // display to the user. We could truncate it either in the store or when rendering.
      // Also, we may desire stronger links between the header row data and the
      // body row data. Right now they share indices, which is useful. Depending on
      // the API, we could turn these into actual tree objects and do more with them.
    });
  default:
    return state;
  }
};

export default csv;