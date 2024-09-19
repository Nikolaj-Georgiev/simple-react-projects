export default function StageCard({ phaseName, onClick }) {
  return (
    <div
      className='stage-card'
      onClick={onClick}
    >
      <h2 className='stage-card__title'>{phaseName}</h2>
    </div>
  );
}
