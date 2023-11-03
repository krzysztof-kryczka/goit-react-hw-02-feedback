import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    this.setState(state => ({ [e.target.name]: state[e.target.name] + 1 }));
  };

  render() {
    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <button type="button" name="good" onClick={this.leaveFeedback}>
            Good
          </button>
          <button type="button" name="neutral" onClick={this.leaveFeedback}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.leaveFeedback}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Nautral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
          </ul>
        </div>
      </>
    );
  }
}
