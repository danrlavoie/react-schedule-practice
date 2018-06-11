/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import TableRow from './TableRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TableRow
      row={['A', '123', '1234567890']}
    />,
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('will render even if headerRow is omitted', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TableRow/>,
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});

// TODO Other cases to test:
// That # of children equals length of row
// That text content of cells equals content of row
// That helper functions are correctly called based on data in row
// That CSS classes are correctly applied to divs