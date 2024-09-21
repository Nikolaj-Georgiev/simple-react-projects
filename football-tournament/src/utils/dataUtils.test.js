import { divideMatchesByStage, getMatchDetailsById, getSortedMatchesByDate, getTeamById } from './dataUtils';

describe('divideMatchesByStage', () => {
  const matches = [
    // group phase (before cutoff)
    { id: 1, date: '6/14/2024' },
    { id: 2, date: '6/15/2024' },
    { id: 3, date: '6/16/2024' },
    { id: 4, date: '6/17/2024' },
    { id: 5, date: '6/18/2024' },
    { id: 6, date: '6/19/2024' },
    { id: 7, date: '6/20/2024' },
    { id: 8, date: '6/21/2024' },
    { id: 9, date: '6/22/2024' },
    { id: 10, date: '6/23/2024' },
    { id: 11, date: '6/24/2024' },
    { id: 12, date: '6/25/2024' },

    // round of 16
    { id: 13, date: '6/29/2024' },
    { id: 14, date: '6/30/2024' },
    { id: 15, date: '7/01/2024' },
    { id: 16, date: '7/02/2024' },
    { id: 17, date: '7/03/2024' },
    { id: 18, date: '7/04/2024' },
    { id: 19, date: '7/05/2024' },
    { id: 20, date: '7/06/2024' },

    // quarterfinal
    { id: 21, date: '7/08/2024' },
    { id: 22, date: '7/09/2024' },
    { id: 23, date: '7/10/2024' },
    { id: 24, date: '7/11/2024' },

    // semifinal
    { id: 25, date: '7/12/2024' },
    { id: 26, date: '7/13/2024' },

    // final
    { id: 27, date: '7/14/2024' },
  ];
  const cutOffDate = '6/26/2024';

  it('correctly divides matches into stages', () => {
    const sortedMatches = getSortedMatchesByDate(matches);
    const result = divideMatchesByStage(sortedMatches, cutOffDate);

    expect(result.groupPhase.length).toBe(12); // 12 matches in group phase
    expect(result.roundOf16.length).toBe(8); // 8 matches in round of 16
    expect(result.quarterFinals.length).toBe(4); // 4 matches in quarterfinal
    expect(result.semiFinals.length).toBe(2); // 2 matches in semifinal
    expect(result.final.length).toBe(1); // 1 match in final
  });
});

describe('getTeamById', () => {
  const teams = [
    { id: '1', name: 'Team A' },
    { id: '2', name: 'Team B' },
  ];

  it('returns the correct team based on id', () => {
    expect(getTeamById(teams, '1')).toEqual({ id: '1', name: 'Team A' });
    expect(getTeamById(teams, '2')).toEqual({ id: '2', name: 'Team B' });
  });

  it('returns undefined for unknown id', () => {
    expect(getTeamById(teams, '3')).toBeUndefined();
  });
});

describe('getMatchDetailsById', () => {
  const matches = [
    { id: 1, ateamid: 1, bteamid: 2, date: '2024-06-14', score: '2-1' }
  ];
  const teams = [
    { id: 1, name: 'Team A', managerfullname: 'Manager A' },
    { id: 2, name: 'Team B', managerfullname: 'Manager B' }
  ];
  const players = [
    { id: 1, name: 'Player A1', teamid: 1 },
    { id: 2, name: 'Player A2', teamid: 1 },
    { id: 3, name: 'Player B1', teamid: 2 },
    { id: 4, name: 'Player B2', teamid: 2 }
  ];
  const recordsIndexObj = {
    1: [
      { playerid: 1, fromminutes: '0', tominutes: '45' },
      { playerid: 2, fromminutes: '46', tominutes: '90' },
      { playerid: 3, fromminutes: '0', tominutes: '90' }
    ]
  };
  const flagsUrl = {
    'Team A': 'url_to_team_a_flag',
    'Team B': 'url_to_team_b_flag'
  };

  it('should return match details with correct data', () => {
    const result = getMatchDetailsById(1, matches, teams, players, recordsIndexObj, flagsUrl);

    expect(result).toEqual({
      matchId: 1,
      date: '2024-06-14',
      score: '2-1',
      teamA: {
        name: 'Team A',
        manager: 'Manager A',
        flag: 'url_to_team_a_flag',
        teamScore: '2',
        players: [
          { id: 1, name: 'Player A1', playingTime: [{ fromminutes: '0', tominutes: '45' }], teamid: 1 },
          { id: 2, name: 'Player A2', playingTime: [{ fromminutes: '46', tominutes: '90' }], teamid: 1 }
        ]
      },
      teamB: {
        name: 'Team B',
        manager: 'Manager B',
        flag: 'url_to_team_b_flag',
        teamScore: '1',
        players: [
          { id: 3, name: 'Player B1', playingTime: [{ fromminutes: '0', tominutes: '90' }], teamid: 2 },
          { id: 4, name: 'Player B2', playingTime: [], teamid: 2 }
        ]
      }
    });
  });

  it('should return null if match is not found', () => {
    const result = getMatchDetailsById(999, matches, teams, players, recordsIndexObj, flagsUrl);
    expect(result).toBeNull();
  });
});