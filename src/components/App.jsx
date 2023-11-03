import React, { Component } from 'react';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    this.setState(state => ({ [e.target.name]: state[e.target.name] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100 || 0);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <button type="button" name="good" onClick={this.leaveFeedback}>
            Good
          </button>
          <button type="button" name="neutral" onClick={this.leaveFeedback}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.leaveFeedback}>
            Bad
          </button>
          <div>
            <h2>Statistics</h2>
            <ul>
              <li>Good: {this.state.good}</li>
              <li>Nautral: {this.state.neutral}</li>
              <li>Bad: {this.state.bad}</li>
              <li>Total: {this.countTotalFeedback()}</li>
              <li>
                Positive feedback: {this.countPositiveFeedbackPercentage()}%
              </li>
            </ul>
          </div>
        </Section>
      </>
    );
  }
}
