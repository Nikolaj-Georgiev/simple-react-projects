import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import MatchDetails from './MatchDetails';

// Мокваме useData хука
jest.mock('../../context/DataContext');

// Мокваме useParams хука
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ matchId: '1' }),
}));

// Мокваме помощните функции
jest.mock('../../utils/dataUtils', () => ({
  getMatchDetailsById: jest.fn(),
  getFilteredMatchPlayers: jest.fn(),
  getTeamFieldSchemaByTeamName: jest.fn(),
}));

const dataUtils = require('../../utils/dataUtils');

// Мокваме useTeamFieldSchema хука
jest.mock('../../hooks/useTeamFieldSchema', () =>
  jest.fn(() => [
    [{ id: 1, teamnumber: '10', fullname: 'Player A1', position: 'Forward' }],
    [{ id: 2, teamnumber: '7', fullname: 'Player A2', position: 'Midfielder' }],
  ])
);

describe('MatchDetails', () => {
  const mockMatchData = {
    teamA: {
      name: 'Team A',
      flag: 'flagA.png',
      manager: 'Manager A',
      teamScore: 2,
      players: [
        { id: 1, teamnumber: '10', fullname: 'Player A1', position: 'Forward' },
        {
          id: 2,
          teamnumber: '7',
          fullname: 'Player A2',
          position: 'Midfielder',
        },
      ],
    },
    teamB: {
      name: 'Team B',
      flag: 'flagB.png',
      manager: 'Manager B',
      teamScore: 1,
      players: [
        { id: 3, teamnumber: '9', fullname: 'Player B1', position: 'Forward' },
        { id: 4, teamnumber: '5', fullname: 'Player B2', position: 'Defender' },
      ],
    },
  };

  beforeEach(() => {
    useData.mockReturnValue({
      matchesData: { loading: false, error: null, data: [] },
      flagUrls: { loading: false, error: null, flagUrls: {} },
      teamsData: { loading: false, error: null, data: [] },
      playersData: { loading: false, error: null, data: [] },
      recordsIndexObject: {},
    });

    // const dataUtils = require('../../utils/dataUtils');
    dataUtils.getMatchDetailsById.mockReturnValue(mockMatchData);
    dataUtils.getFilteredMatchPlayers.mockReturnValue(
      mockMatchData.teamA.players.concat(mockMatchData.teamB.players)
    );
    dataUtils.getTeamFieldSchemaByTeamName.mockReturnValue([4, 4, 2]);
  });

  it('renders loading state', () => {
    useData.mockReturnValue({
      matchesData: { loading: true, error: null, data: null },
      flagUrls: { loading: true, error: null, flagUrls: null },
      teamsData: { loading: true, error: null, data: null },
      playersData: { loading: true, error: null, data: null },
    });

    render(<MatchDetails />);
    expect(screen.getByText('Match details are loading..')).toBeInTheDocument();
  });

  it('renders error state', () => {
    useData.mockReturnValue({
      matchesData: { loading: false, error: 'Error', data: null },
      flagUrls: { loading: false, error: null, flagUrls: {} },
      teamsData: { loading: false, error: null, data: [] },
      playersData: { loading: false, error: null, data: [] },
    });

    render(<MatchDetails />);
    expect(
      screen.getByText('Cannot load match details...')
    ).toBeInTheDocument();
  });

  it('renders match details correctly', () => {
    render(
      <MemoryRouter initialEntries={['/match/1']}>
        <Routes>
          <Route
            path='/match/:matchId'
            element={<MatchDetails />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Team A')).toBeInTheDocument();
    expect(screen.getByText('Team B')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getAllByText('Team Manager:').length).toBeGreaterThan(0);
    expect(screen.getByText('Manager A')).toBeInTheDocument();
    expect(screen.getByText('Manager B')).toBeInTheDocument();
    expect(screen.getByAltText('flag of Team A')).toBeInTheDocument();
    expect(screen.getByAltText('flag of Team B')).toBeInTheDocument();
  });
  it('renders player lists correctly', () => {
    render(
      <MemoryRouter initialEntries={['/match/1']}>
        <Routes>
          <Route
            path='/match/:matchId'
            element={<MatchDetails />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getAllByText('10').length).toBeGreaterThan(0);
    expect(screen.getAllByText('7').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Player A1').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Player A2').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Forward').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Midfielder').length).toBeGreaterThan(0);
  });
});
