// Write your code here
// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-card-container">
      <div className="main-info-container">
        <div className="match-meta">
          <p className="competing-team-title">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo-lg"
        />
      </div>
      <hr className="separator" />
      <div className="detailed-info-container">
        <p className="info-label">First Innings</p>
        <p className="info-value">{firstInnings}</p>
        <p className="info-label">Second Innings</p>
        <p className="info-value">{secondInnings}</p>
        <p className="info-label">Man Of The Match</p>
        <p className="info-value">{manOfTheMatch}</p>
        <p className="info-label">Umpires</p>
        <p className="info-value">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
