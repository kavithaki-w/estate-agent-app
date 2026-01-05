import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Favourites from '../components/Favourites.jsx';


describe('Favourites Component', () => {
  // Displays error msg
  it('shows a message when there are no favourites', () => {
    render(<Favourites favourites={[]} removeFavourites={() => {}} clearAll={() => {}}/>);
    expect(screen.getByText(/no favourites yet/i)).toBeInTheDocument();
  });

});