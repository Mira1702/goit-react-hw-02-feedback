import React from 'react';
import Notification from '../notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            {total > 0 && (
                <div className="feedback-value">
                   <span>Good: {good}</span>
                   <span>Neutral: {neutral}</span>
                   <span>Bad: {bad}</span>
                   <span>Total: {total} </span>
                   <span>Positive feedback: {positivePercentage}%</span>
                </div>
            )}
            {total === 0 && <Notification
                message='No feedback given'
            />}
        </>
    )
};

export default Statistics;