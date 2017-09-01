import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './sidebar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideBar />, div);
});
