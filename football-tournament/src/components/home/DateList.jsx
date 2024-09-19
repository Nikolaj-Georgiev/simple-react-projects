export default function DateList({ stage, onSelectDate, onBack }) {
  return (
    <div className='date-list'>
      <div className='date-list__header'>
        <h3 className='date-list__header-heading'>{stage.name}</h3>
        <button
          className='button'
          onClick={onBack}
        >
          Back to Phases
        </button>
      </div>

      {Object.keys(stage.data).map((date) => (
        <div
          key={date}
          onClick={() => onSelectDate(date)}
        >
          <h3>{date}</h3>
        </div>
      ))}
    </div>
  );
}
