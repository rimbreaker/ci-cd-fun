import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('gun', () => {
  const Gun = (_a: Record<string, any>) => ({
    get: (_b: string) => ({
      on: (_c: any) => null,
      put: (_c: Record<string, any>) => null
    })
  })
  return Gun
})

test('renders color picker', () => {
  render(<App />);
  const colorPicker = screen.getByRole('slider', {
    name: /color/i
  })
  expect(colorPicker).toBeInTheDocument();
});
