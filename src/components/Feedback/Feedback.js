import React from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = evt => {
    let name = evt.target.name;
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%';

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={this.leaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>

        <Section title={'Statistic'}>
          {good || neutral || bad ? (
            <Statistics
              name={{ good, neutral, bad }}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </Section>
      </>
    );
  }
}

// export class Counter extends React.Component {
//   static defaultProps = {
//     step: 1,
//   };

//   leaveFeedback(evt) {}

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button" onClick={this.leaveFeedback}>
//           Increment by {step}
//         </button>
//         <button type="button">Decrement by {step}</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Counter step={5} />, document.getElementById('root'));
