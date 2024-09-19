import { useData } from '../context/DataContext';
import {
  divideMatchesByStage,
  getGroupedMatchesByDate,
  getSortedMatchesByDate,
} from '../utils/dataUtils';
import { CUTOFF_DATE } from '../utils/config';
import Match from './match/Match';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import Stage from './home/Stage';

export default function HomePage() {
  const { matchesData } = useData();

  if (
    matchesData.loading ||
    !matchesData.data ||
    matchesData.data.length === 0
  ) {
    return <Loader />;
  }
  if (matchesData.error) {
    return <ErrorComponent />;
  }
  const ascendingSortedMatches = getSortedMatchesByDate(matchesData.data);

  const { groupPhase, roundOf16, quarterFinals, semiFinals, final } =
    divideMatchesByStage(ascendingSortedMatches, CUTOFF_DATE);

  const groupedGroupPhaseMatches = getGroupedMatchesByDate(groupPhase);
  const groupedRoundOf16Matches = getGroupedMatchesByDate(roundOf16);
  const groupedQuarterFinalsMatches = getGroupedMatchesByDate(quarterFinals);
  const groupedSemiFinalsMatches = getGroupedMatchesByDate(semiFinals);
  const groupedFinalMatches = getGroupedMatchesByDate(final);

  const stages = [
    { name: 'Group Phase', data: groupedGroupPhaseMatches },
    { name: 'Round of 16', data: groupedRoundOf16Matches },
    { name: 'Quarter Finals', data: groupedQuarterFinalsMatches },
    { name: 'Semi Finals', data: groupedSemiFinalsMatches },
    { name: 'Final', data: groupedFinalMatches },
  ];

  return (
    <section className='home'>
      <h1 className='home__heading-primary'>Tournament Stages</h1>

      {stages.map((phaseObj) => (
        <Stage
          key={phaseObj.name}
          phase={phaseObj.name}
          data={phaseObj.data}
        />
      ))}
    </section>
  );
}
