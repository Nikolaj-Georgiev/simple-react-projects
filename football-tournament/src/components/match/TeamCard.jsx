export default function TeamCard({ name, flag, score }) {
  return (
    <div className='home__team-card'>
      <div className='home__list-item-image'>
        <img
          src={flag}
          alt={`${name} flag`}
          className='home__list-item-image--img'
        />
      </div>
      <p className='home__heading-tertiary home__team-name'>{name}</p>
      <p className='home__list-item--text'>{score}</p>
    </div>
  );
}
