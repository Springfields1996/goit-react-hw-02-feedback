import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ name, total, positivePercentage }) => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>Good: {name.good}</span>
      <span>Neutral: {name.neutral}</span>
      <span>Bad: {name.bad}</span>
    </div>
    <h3>Total feedbacks: {total}</h3>
    <h3>Percent of positive feedbacks: {positivePercentage}</h3>
  </>
);

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  name: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
