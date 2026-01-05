import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchForm from '../components/SearchForm.jsx';
import userEvent from '@testing-library/user-event';



describe('SearchForm Component', () => {
  // TEST 1: Search form component renders
  it('renders search form component', () => {
    render(<SearchForm onSearch={() => {}}/>);
    expect(screen.getByText(/search property/i)).toBeInTheDocument();
  });

  it('allow user to type postcode', async() => {
    const user = userEvent.setup();
    render(<SearchForm onSearch={() => {}}/>);

    const postcodeInput = screen.getByPlaceholderText("e.g. BR1, NW1");
    await user.type(postcodeInput, 'BR5');

    expect(postcodeInput).toHaveValue('BR5');
  });
});