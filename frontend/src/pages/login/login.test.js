import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginPage />, div);
});
