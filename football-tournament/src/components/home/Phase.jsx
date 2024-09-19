import Match from '../match/Match';

export default function Phase({ phase, data }) {
  return (
    <div className='home__phase'>
      <h2 className='home__heading-secondary'>{phase}</h2>
      <span></span>
      {renderMatches(data, phase)}
    </div>
  );
}

function renderMatches(groupedMatches, stageName) {
  return Object.keys(groupedMatches).map((date) => {
    return (
      <div key={date}>
        <h3 className='home__heading-tertiary'>{`${stageName} - ${date}`}</h3>
        <ul className='home__list'>
          {groupedMatches[date].map((match) => (
            <Match
              key={match.id}
              match={match}
            />
          ))}
        </ul>
      </div>
    );
  });
}
