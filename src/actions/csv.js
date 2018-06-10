import fetch from 'cross-fetch'
import Papa from 'papaparse'

export const loadDepartures = filename => dispatch => {
  dispatch(requestDepartures);
  return fetch(filename).then(response => {
    return response.ok ? response.text() : Promise.reject(response.status);
  })
  .then(departures => {
    const csvData = Papa.parse(departures);
    dispatch(loadDeparturesSuccess(csvData));
  }).catch(error => {
    throw(error);
  })
};

export const requestDepartures = { type: 'REQUEST_DEPARTURES' };
export const loadDeparturesSuccess = csvData => {
  return {
    type: 'REQUEST_DEPARTURES_SUCCESS',
    csvData
  }
};