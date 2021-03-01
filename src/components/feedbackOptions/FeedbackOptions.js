import React from 'react';

// const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
//     return (
//         <button type="button" data-feedback={feedback} className="feedback-button" onClick={onLeaveFeedback}>
//             {feedback}
//         </button> 
//     )   
// }

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//     return options.map((option) => FeedbackButton ({feedback:option, onLeaveFeedback}))
// }

const FeedbackOptions = ({ onLeaveFeedback }) => (
    <div >
        <button type="button" name="good" className="feedback-button" onClick={onLeaveFeedback}>
            Good
        </button>
        <button type="button" name="neutral" className="feedback-button" onClick={onLeaveFeedback}>
            Neutral
        </button>
        <button type="button" name="bad" className="feedback-button" onClick={onLeaveFeedback}>
            Bad
        </button>
    </div>
);

export default FeedbackOptions;