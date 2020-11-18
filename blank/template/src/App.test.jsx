import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders learn react link', () => {
    render(<App />);
    const pxbText = screen.getByText(/PX Blue/i);
    expect(pxbText).toBeInTheDocument();
});
