import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar.jsx';

describe('NavBar Component', () => {

    it('renders the navigation bar', () => {
    render(<NavBar/>);
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });

});
