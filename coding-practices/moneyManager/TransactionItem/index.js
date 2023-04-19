// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, DeleteHistoryItem} = props
  const {Transactiontitle, enteredAmount, ActiveTypeId, id} = transactionDetails
  const onClicteIcon = () => {
    DeleteHistoryItem(id, enteredAmount, ActiveTypeId)
  }

  return (
    <li key="title" className="class-names-cont list-item-In-Transactionitem">
      <p className="list-word-width">{Transactiontitle}</p>
      <p className="list-word-width">{enteredAmount}</p>
      <p className="list-word-width">{ActiveTypeId}</p>
      <div className="list-word-width delete-btn-container">
        <button
          type="button"
          className="delete-btn"
          onClick={onClicteIcon}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default TransactionItem
