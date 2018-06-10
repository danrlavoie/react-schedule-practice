
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
      })
    case 'REQUEST_DEPARTURES_SUCCESS':
      return Object.assign({}, state, {
        departure_request: 'success',
        headerRow: action.csvData.data[0],
        bodyRows: action.csvData.data.slice(1)
      })
    default:
      return state
  }
}

export default csv