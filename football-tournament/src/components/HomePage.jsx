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
import { useState } from 'react';
import StageCard from './home/StageCard';

export default function HomePage() {
  const { matchesData } = useData();
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

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

  const stages = [
    { name: 'Group Phase', data: getGroupedMatchesByDate(groupPhase) },
    { name: 'Round of 16', data: getGroupedMatchesByDate(roundOf16) },
    { name: 'Quarter Finals', data: getGroupedMatchesByDate(quarterFinals) },
    { name: 'Semi Finals', data: getGroupedMatchesByDate(semiFinals) },
    { name: 'Final', data: getGroupedMatchesByDate(final) },
  ];

  return (
    <section className='home'>
      <h1 className='home__heading-primary'>Tournament Stages</h1>

      {!selectedStage && (
        <div className='home__stage-cards'>
          {stages.map((stage) => (
            <StageCard
              key={stage.name}
              stageName={stage.name}
              onClick={() => setSelectedStage(stage)}
            />
          ))}
        </div>
      )}

      {stages.map((phaseObj) => (
        <Stage
          key={phaseObj.name}
          stage={phaseObj.name}
          data={phaseObj.data}
        />
      ))}
    </section>
  );
}
