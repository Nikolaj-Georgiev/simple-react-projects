export default function StageCard({ stageName, onClick }) {
  return (
    <div
      className='stage-card'
      onClick={onClick}
    >
      <img
        className='stage-card__img'
        src='/goal_icon.ico'
        alt='Icon of football tournament'
      />
      <h2 className='stage-card__title'>{stageName}</h2>
      <img
        className='stage-card__img'
        src='/goal_icon.ico'
        alt='Icon of football tournament'
      />
    </div>
  );
}
