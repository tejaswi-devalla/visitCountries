import './index.css'

const VisitedCountries = props => {
  const {eachItem, deleteVisitedCountry} = props
  const {id, name, imageUrl, isVisited} = eachItem
  const onClickRemoveBtn = () => {
    deleteVisitedCountry(id)
  }
  return (
    <>
      {isVisited && (
        <li className="img-btn-cont">
          <img src={imageUrl} alt="thumbnail" className="countries-img" />
          <div className="country-visited-cont">
            <p className="country-name">{name}</p>
            <button
              type="button"
              className="remove-btn"
              onClick={onClickRemoveBtn}
            >
              Remove
            </button>
          </div>
        </li>
      )}
    </>
  )
}
export default VisitedCountries
