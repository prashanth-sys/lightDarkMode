import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {lightCard: false, darkLight: false}

  light = () => {
    const {lightCard} = this.state
    this.setState(() => ({
      lightCard: !lightCard,
    }))
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Click To Change Mode</h1>
        <button className="button" type="button" onClick={this.light}>
          Light Mode
        </button>
      </div>
    )
  }
}
export default LightDarkMode
