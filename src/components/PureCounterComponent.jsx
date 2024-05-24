// src/components/PureCounterComponent.jsx
import React, { PureComponent } from 'react';

class PureCounterComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      toggle: false
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  }

  incrementCounter = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        counter: prevState.counter + 1
      }));
    }
  }

  render() {
    console.log("This is Pure Component");
    return (
      <div>
        <h1>Pure Component: {this.state.counter}</h1>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.incrementCounter}>Increment</button>       
        <p>Toggle is {this.state.toggle ? 'True' : 'False'}</p>
      </div>
    );
  }
}

export default PureCounterComponent;
