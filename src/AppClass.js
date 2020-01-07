import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
    isOn: false
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }))
  }

  render() {
    return (
      <>
        <h2> button </h2>
        <button onClick={this.incrementCount}>
          this button has been clicked {this.state.count} times
        </button>
        <h2> light </h2>
        <div
          onClick={this.toggleLight}
          style={{
            height: "50px",
            width: "50px",
            background: this.state.isOn ? "yellow" : "grey"
          }}
        >
        </div>
      </>
    )
  }
}

export default App;
