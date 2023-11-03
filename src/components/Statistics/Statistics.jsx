import React from 'react';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = props => {
    const {good, neutral, bad, total, positivePercentage} = props;
    
    return (
      <div className={css.statistics__container}>
        <h3 className={css.statistics__head}>Statistics</h3>
        <ul className={css.statistics__list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

export default Statistics;
