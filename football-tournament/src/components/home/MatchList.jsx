import Match from '../match/Match';

export default function MatchList({ stage, selectedDate, onBack }) {
  return (
    <div className='match-list'>
      <button
        className='button'
        onClick={onBack}
      >
        Back to Dates
      </button>
      <div>
        <h3 className='match-list__heading'>{`${stage.name} - ${selectedDate}`}</h3>
        <ul className='match-list__matches'>
          {stage.data[selectedDate].map((match) => (
            <Match
              key={match.id}
              match={match}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
