import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders welcome text', () => {
    render(<span>Welcome!</span>);
    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
});