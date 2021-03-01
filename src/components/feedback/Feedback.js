import React, { Component } from 'react';
import Title from '../title/Title';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Statistics from '../statistics/Statistics';

import { FEEDBACK_OPTIONS } from '../data/constans';

import './Feedback.css';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleIncrement = ({ target }) => {
        const {feedback} = target.dataset
        this.setState((prevState) => ({           
            [feedback]: prevState[feedback] + 1 
        }));
    }
    // handleIncrementNeutral = () => {
    //     this.setState(prevState => ({           
    //         neutral: prevState.neutral + 1,           
    //     }));
    // }
    // handleIncrementBad = () => {
    //     this.setState(prevState => ({           
    //         bad: prevState.bad + 1,           
    //     }));
    // }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;        
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return total ? Math.round((good / total) * 100) : 0;
    }
    

    render() {
        return (
            <div className="Feedback">
                <Title
                    title='Please leave feedback'
                />
                <FeedbackOptions                    
                    options={FEEDBACK_OPTIONS}
                    onLeaveFeedback={this.handleIncrement}                    
                />
                <Title
                    title='Statistics'
                />
                       
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />  
            </div>
        )
    }
}

export default Feedback;