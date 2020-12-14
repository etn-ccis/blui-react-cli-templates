import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders lwelcome text', () => {
    render(<App />);
    const pxbText = screen.getByText(/Welcome to PX/i);
    expect(pxbText).toBeInTheDocument();
});
