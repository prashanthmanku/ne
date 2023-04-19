// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {imgUrl, title, amount, alt, className, testid} = props

  return (
    <li className={`moneyDetails-item-container ${className}`}>
      <img src={imgUrl} className="money-img" alt={alt} />
      <div className="title-amout-container">
        <p className="title">{title}</p>
        <p className="amout" data-testid={testid}>
          Rs {amount}
        </p>
      </div>
    </li>
  )
}
export default MoneyDetails
