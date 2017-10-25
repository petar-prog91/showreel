import React from 'react';
import ReactDOM from 'react-dom';
import Explore from './explore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Explore />, div);
});
