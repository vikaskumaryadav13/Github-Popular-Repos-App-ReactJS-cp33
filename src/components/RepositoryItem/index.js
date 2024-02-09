// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name, 
    imageUrl, 
    starsCount, 
    forksCount, 
    issuesCount,
  } = repositoryDetails

  return (
    <li className="repository-item">
      <img src={imageUrl} className="repository-image" alt={name} />
      <h1 className="repo-name">{name}</h1>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
          className="stats-icon"
        />
        <p className="stats-text">{starsCount} stars</p>
      </div>

      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png  "
          alt="forks"
          className="stats-icon"
        />
        <p className="stats-text">{forksCount} forks</p>
      </div>

      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="open issues"
          className="stats-icon"
        />
        <p className="stats-text">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
