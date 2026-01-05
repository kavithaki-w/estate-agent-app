import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PropertyCardLarge from '../components/PropertyCardLarge';
import { MemoryRouter } from 'react-router-dom'; //Memory router provides a router context without needing a browser

//mock properties as the component requires a prop
const mockProperty = { 
  id: 'prop1',
  name: 'Woodland Manor',
  price: 750000,
  type: 'House',
  description: 'Test description',
  thumbnail: '/test.jpg'
};

describe('PropertyCardLarge component', () => {
    //Test checks whether large property card is renderd
  it('renders property details correctly', () => {
    render(
      <MemoryRouter> {/* <-- wrap here */}
        <PropertyCardLarge
          property={mockProperty}
          addFavourites={() => {}}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Woodland Manor')).toBeInTheDocument();
    expect(screen.getByText('House')).toBeInTheDocument();
  });

});
