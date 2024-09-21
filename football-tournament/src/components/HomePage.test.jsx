import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from './HomePage';
import { useData } from '../context/DataContext';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('../context/DataContext', () => ({
  useData: jest.fn(),
}));

const mockMatchesData = {
  loading: false,
  error: null,
  data: [
    { id: 1, date: '6/14/2024', ateamid: 1, bteamid: 2, score: '2-1' },
    { id: 2, date: '6/29/2024', ateamid: 3, bteamid: 4, score: '1-1' },
  ],
};

describe('HomePage', () => {
  beforeEach(() => {
    useData.mockReturnValue({ matchesData: mockMatchesData });
    React.useState.mockImplementation(jest.requireActual('react').useState);
  });

  it('renders tournament stages correctly', () => {
    render(<HomePage />);
    expect(screen.getByText('Tournament Stages')).toBeInTheDocument();
  });
  it('renders stage cards for each stage', () => {
    render(<HomePage />);
    expect(screen.getByText('Group Phase')).toBeInTheDocument();
    expect(screen.getByText('Round of 16')).toBeInTheDocument();
    expect(screen.getByText('Quarter Finals')).toBeInTheDocument();
    expect(screen.getByText('Semi Finals')).toBeInTheDocument();
    expect(screen.getByText('Final')).toBeInTheDocument();
  });

  it('renders stage details when stage card is clicked', () => {
    render(<HomePage />);
    fireEvent.click(screen.getByText('Group Phase'));
    expect(screen.getByText('Back to Stages')).toBeInTheDocument();
  });
});
