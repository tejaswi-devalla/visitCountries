import './index.css'

const Countries = props => {
  const {eachItem, changeVisitedMode} = props
  const {id, name, isVisited} = eachItem
  const onClickVisitBtn = () => {
    changeVisitedMode(id)
  }

  return (
    <li className="countries-list">
      <p className="countries-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button type="button" className="visit-btn" onClick={onClickVisitBtn}>
          Visit
        </button>
      )}
    </li>
  )
}
export default Countries
