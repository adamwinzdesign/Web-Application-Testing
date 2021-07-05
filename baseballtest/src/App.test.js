import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without freaking out', () => {
  render(<App />);
})

test('Multiple elements with testid = button renders', () => {
  const page = render(<App/>);
  page.getAllByTestId('button');
})

test('Exactly one h1 element renders', () => {
  const page = render(<App/>);
  page.getByTestId('h1');
})
