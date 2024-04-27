// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {text: `Subscribe`}
  subs = () => {
    if (this.state.text === `Subscribe`) {
      this.setState({text: `Subscribed`})
    }
    this.setState({text: `Subscribe`})
  }
  render() {
    const {text} = this.state
    return (
      <div className="bg-cont">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.subs}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
