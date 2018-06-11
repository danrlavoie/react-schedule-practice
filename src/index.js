//eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
//eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
//eslint-disable-next-line no-unused-vars
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Connects our redux store to the application and renders the page.
 */
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
