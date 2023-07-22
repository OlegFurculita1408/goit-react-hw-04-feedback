import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button className={css.btnFeedback}
          option={option}
          onClick={() => onLeaveFeedback(option)}
          key={option}
          type="button"
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions