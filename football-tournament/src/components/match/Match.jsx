import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { getScoreFromMatch, getTeamById } from '../../utils/dataUtils';
import Loader from '../Loader';
import ErrorComponent from '../ErrorComponent';
import TeamCard from './TeamCard';

export default function Match({ match }) {
  const { teamsData, flagUrls } = useData();
  const navigate = useNavigate();

  function handleSelectMatch(matchId) {
    navigate(`/matches/${matchId}`);
  }

  if (teamsData.loading || flagUrls.loading) {
    return <Loader />;
  }
  if (teamsData.error || flagUrls.error) {
    return <ErrorComponent />;
  }

  const teamA = getTeamById(teamsData.data, match.ateamid);
  const teamB = getTeamById(teamsData.data, match.bteamid);
  const teamScore = getScoreFromMatch(match);

  return (
    <li
      className='home__list-item'
      onClick={() => handleSelectMatch(match.id)}
    >
      <TeamCard
        key={teamA.name}
        name={teamA.name}
        flag={flagUrls.flagUrls[teamA.name]}
        score={teamScore.teamA}
      />
      {/* <p> vs </p> */}
      <img
        className='stage-card__img'
        src='/goal_icon.ico'
        alt='Icon of football tournament'
      />
      <TeamCard
        key={teamB.name}
        name={teamB.name}
        flag={flagUrls.flagUrls[teamB.name]}
        score={teamScore.teamB}
      />
      {/* <p className='home__list-item--text'>{` Score: ${match.score}`}</p> */}
    </li>
  );
}
