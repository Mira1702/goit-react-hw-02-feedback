import React from 'react';

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
    return (
        <button type="button" data-feedback={feedback} className="feedback-button" onClick={onLeaveFeedback}>
            {feedback}
        </button> 
    )   
}

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map((option) => FeedbackButton ({feedback:option, onLeaveFeedback}))
}

export default FeedbackOptions;