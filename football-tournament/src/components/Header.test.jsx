import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Header from './Header';

// mocking useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Header', () => {
  it('renders the logo and title', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(
      screen.getByAltText('Icon of football tournament')
    ).toBeInTheDocument();
    expect(screen.getByText('Tournament')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Bracket')).toBeInTheDocument();
    expect(screen.getByText('Teams')).toBeInTheDocument();
  });

  it('navigates to home page when logo is clicked', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Tournament'));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('navigates to correct pages when links are clicked', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    const bracketLink = screen.getByText('Bracket');
    const teamsLink = screen.getByText('Teams');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(bracketLink).toHaveAttribute('href', '/bracket');
    expect(teamsLink).toHaveAttribute('href', '/teams');
  });
});
