import React from 'react';
import ReactDOM from 'react-dom';
import NotWatched from './notwatched';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotWatched />, div);
});
