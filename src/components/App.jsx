import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOption';
import Statistics from './Statistics/Statistics';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const handlerClick = (normOption) => {
    const option = normOption.toLowerCase();
    if (option === 'good') {
      setGood(good + 1);
    }
    if (option === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (option === 'bad') {
      setBad(bad + 1);
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((100 / total) * good || 0);
  }

  const options = [ 'good', 'neutral', 'bad' ];

    return (
      <div>
          <section>
            <h2>Please leave feedback</h2>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handlerClick}
          />
          </section>
          <section>
            <h2>Statistics</h2>
              {countTotalFeedback() ? (
            <Statistics 
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <h3>There is no feedback</h3>
          )}
        </section>
      </div>
        )
}
export default App
