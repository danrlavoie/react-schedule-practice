import fetch from 'cross-fetch'
import Papa from 'papaparse'

// Loads the departure data from a given file location
export const loadDepartures = filename => dispatch => {
  dispatch(requestDepartures);
  return fetch(filename).then(response => {
    return response.ok ? response.text() : Promise.reject(response.status);
  })
  .then(departures => {
    // Papa is a small library focused on quickly parsing CSV data into objects.
    // No reason to reinvent the wheel here.
    const csvData = Papa.parse(departures);
    dispatch(loadDeparturesSuccess(csvData));
  }).catch(error => {
    throw(error);
  })
};

// These two update the store with the progress of departure data requesting
export const requestDepartures = { type: 'REQUEST_DEPARTURES' };
export const loadDeparturesSuccess = csvData => {
  return {
    type: 'REQUEST_DEPARTURES_SUCCESS',
    csvData
  }
};