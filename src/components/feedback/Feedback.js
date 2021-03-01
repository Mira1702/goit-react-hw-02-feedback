import React, { Component } from 'react';
import Title from '../title/Title';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Statistics from '../statistics/Statistics';

import './Feedback.css';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleIncrement = element => {        
        this.setState((prevState) => ({           
            [element.target.name]: prevState[element.target.name] + 1 
        }));
    }    

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