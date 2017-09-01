import React from 'react';
import ReactDOM from 'react-dom';
import MainBar from './mainbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainBar />, div);
});
