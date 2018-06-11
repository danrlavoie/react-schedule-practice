/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import TableHeaderRow from './TableHeaderRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
	  <TableHeaderRow
	  	headerRow={['A', 'B', 'C']}
	  />,
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('will render even if headerRow is omitted', () => {
  const div = document.createElement('div');
  ReactDOM.render(
	  <TableHeaderRow/>,
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});

// TODO Other cases to test:
// That # of children equals length of headerRow
// That text content of cells equals constent of headerRow
// That CSS classes are correctly applied to divs