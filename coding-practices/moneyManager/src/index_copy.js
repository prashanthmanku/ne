import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    ActiveTypeId: transactionTypeOptions[0].optionId,
    historyList: [],
    Transactiontitle: '',
    enteredAmount: '',
    income: 0,
    expenses: 0,
  }

  onChangeTitle = event => {
    this.setState({Transactiontitle: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({enteredAmount: event.target.value})
  }

  onChageTypeDropDown = event => {
    this.setState({ActiveTypeId: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {
      Transactiontitle,
      enteredAmount,
      ActiveTypeId,
      income,
      expenses,
    } = this.state

    if (
      Transactiontitle.trim() !== '' &&
      enteredAmount.trim() !== '' &&
      !Number.isNaN(Number(enteredAmount))
    ) {
      const newTransaction = {
        id: v4(),
        Transactiontitle,
        enteredAmount,
        ActiveTypeId,
      }

      const newIncome =
        ActiveTypeId === 'INCOME' ? income + parseInt(enteredAmount) : income
      const newExpense =
        ActiveTypeId === 'EXPENSES'
          ? expenses + parseInt(enteredAmount)
          : expenses

      this.setState(prevState => ({
        historyList: [...prevState.historyList, newTransaction],
        income: newIncome,
        expenses: newExpense,
        Transactiontitle: '',
        enteredAmount: '',
      }))
    }
  }

  DeleteHistoryItem = (id, amount, type) => {
    let {historyList, income, expenses} = this.state
    historyList = historyList.filter(each => each.id !== id)
    if (type === 'INCOME') {
      income -= parseInt(amount)
    } else {
      expenses -= parseInt(amount)
    }
    this.setState({historyList, income, expenses})
  }

  render() {
    const {
      historyList,
      ActiveTypeId,
      income,
      expenses,
      Transactiontitle,
      enteredAmount,
    } = this.state
    const balance = income - expenses

    return (
      <div className="app-Container">
        <div className="app-bg-container">
          <div className="many-manager-heading-card">
            <h1 className="name">Hi,Richard</h1>
            <p className="heading-description">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <ul className="money-details-list-card">
            <MoneyDetails
              imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
              title="Your Balance"
              amount={balance}
              key="balance"
              className="bg-1"
              testid="balanceAmount"
            />
            <MoneyDetails
              imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              title="Your Income"
              amount={income}
              key="income"
              alt="income"
              className="bg-2"
              testid="incomeAmount"
            />

            <MoneyDetails
              imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              title="Your Expenses"
              amount={expenses}
              key="expences"
              alt="expenses"
              className="bg-3"
              testid="expensesAmount"
            />
          </ul>
          <div className="add-transaction-history-bg-container">
            <div className="Add-transaction-container">
              <h1 className="add-trans-heading">Add Transaction</h1>
              <form onSubmit={this.onAddTransaction}>
                <label htmlFor="title">TITLE</label>
                <br />
                <input
                  type="text"
                  id="title"
                  className="input"
                  placeholder="TITLE"
                  onChange={this.onChangeTitle}
                  value={Transactiontitle}
                />
                <br />
                <label htmlFor="AMOUNT">AMOUNT</label>
                <br />
                <input
                  type="text"
                  id="AMOUNT"
                  className="input"
                  placeholder="AMOUNT"
                  onChange={this.onChangeAmount}
                  value={enteredAmount}
                />
                <br />
                <label htmlFor="type">TYPE</label>
                <br />
                <select
                  id="type"
                  className="input"
                  value={ActiveTypeId}
                  onChange={this.onChageTypeDropDown}
                >
                  {transactionTypeOptions.map(each => (
                    <option value={each.optionId} key={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>
            </div>
            <div className="history-bg-container">
              <h1 className="histry-heading">History</h1>
              <ul className="history-lists-container historyborder1">
                <li key="title" className="class-names-cont fix">
                  <p className="list-word-width">Title</p>
                  <p className="list-word-width">Amount</p>
                  <p className="list-word-width">Type</p>
                  <p className="list-word-width">{}</p>
                </li>
              </ul>
              <ul className="history-lists-container historyborder2">
                {historyList.map(each => (
                  <TransactionItem
                    transactionDetails={each}
                    DeleteHistoryItem={this.DeleteHistoryItem}
                    key={each.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
