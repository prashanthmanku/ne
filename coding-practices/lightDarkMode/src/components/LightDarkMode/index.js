// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNo: 0}

  render() {
    const {randomNo} = this.state
    return (
      <div className="randomno-bg-container">
        <div className="random-no-card">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button">Generate</button>
          <h1 className="random-no">{randomNo}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
