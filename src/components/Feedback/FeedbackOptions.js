import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  onLeaveFeedback,
  options: [good, neutral, bad],
}) => (
  <>
    <button onClick={onLeaveFeedback} name={good} type="submit">
      {good}
    </button>
    <button onClick={onLeaveFeedback} name={neutral} type="submit">
      {neutral}
    </button>
    <button onClick={onLeaveFeedback} name={bad} type="submit">
      {bad}
    </button>
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
