export default function DateList({ stage, onSelectDate, onBack }) {
  return (
    <div className='date-list'>
      <h2>{stage.name}</h2>
      {Object.keys(stage.data).map((date) => (
        <div
          key={date}
          onClick={() => onSelectDate(date)}
        >
          <h3>{date}</h3>
        </div>
      ))}
      <button
        className='button'
        onClick={onBack}
      >
        Back to Phases
      </button>
    </div>
  );
}
