import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PropertyCardSmall from '../components/PropertyCardSmall';
import { MemoryRouter } from 'react-router-dom';

const mockProperty = {
  id: 'prop1',
  name: 'Woodland Manor',
  price: 750000,
  type: 'House',
  thumbnail: '/test.jpg'
};

describe('PropertyCardSmall component', () => {

  it('renders small property card correctly', () => {
    render(
      <MemoryRouter>
        <PropertyCardSmall
          property={mockProperty}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Woodland Manor')).toBeInTheDocument();
    expect(screen.getByText(/750,000/)).toBeInTheDocument();
  });

});
