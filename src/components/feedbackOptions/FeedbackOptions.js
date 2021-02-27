import React from 'react';

const FeedbackOptions = ({ onLeaveFeedbackGood, onLeaveFeedbackNeutral, onLeaveFeedbackBad }) => (
    <div >
        <button type="button" className="feedback-button" onClick={onLeaveFeedbackGood}>
            Good
        </button>
        <button type="button" className="feedback-button" onClick={onLeaveFeedbackNeutral}>
            Neutral
        </button>
        <button type="button" className="feedback-button" onClick={onLeaveFeedbackBad}>
            Bad
        </button>
    </div>
);

export default FeedbackOptions;