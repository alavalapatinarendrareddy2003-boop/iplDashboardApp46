// Write your code here
// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  const statusClassName = matchStatus === 'Won' ? 'match-won' : 'match-lost'

  return (
    <li className="recent-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo-sm"
      />
      <p className="recent-team-title">{competingTeam}</p>
      <p className="recent-match-result">{result}</p>
      <p className={`match-status ${statusClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
