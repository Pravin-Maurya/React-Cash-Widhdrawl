// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, balanceToUpdate} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    balanceToUpdate(value)
  }

  return (
    <li className="denomination-container">
      <button
        type="button"
        className="denomination-btn"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
