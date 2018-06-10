const csv = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_DEPARTURES':
      return Object.assign({}, state, {
        departure_request: 'requested'
      })
    case 'REQUEST_DEPARTURES_SUCCESS':
      console.log(action);
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