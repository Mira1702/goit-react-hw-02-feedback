import React, { Component } from 'react';
import './Feedback.css';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleIncrementGood = () => {
        this.setState(prevState => ({           
            good: prevState.good + 1,           
        }));
    }
    handleIncrementNeutral = () => {
        this.setState(prevState => ({           
            neutral: prevState.neutral + 1,           
        }));
    }
    handleIncrementBad = () => {
        this.setState(prevState => ({           
            bad: prevState.bad + 1,           
        }));
    }

    render() {
        return (
            <div className="Feedback">
                <h1>Please leave feedback</h1>
                <div >
                    <button type="button" className="feedback-button" onClick={this.handleIncrementGood}>
                        Good
                    </button>
                    <button type="button" className="feedback-button" onClick={this.handleIncrementNeutral}>
                        Neutral
                    </button>
                    <button type="button" className="feedback-button" onClick={this.handleIncrementBad}>
                        Bad
                    </button>
                </div>
                <h2>Statistics</h2>
                <div className="feedback-value">
                    <span>Good: {this.state.good}</span>
                    <span>Neutral: {this.state.neutral}</span>
                    <span>Bad: {this.state.bad}</span>
                </div>
                
            </div>
        )
    }
}

export default Feedback;