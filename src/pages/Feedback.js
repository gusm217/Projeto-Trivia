import React, { Component } from 'react';
import Header from '../components/Header';

export default class Feedback extends Component {
  render() {
    return (
      <div>
        <h3 data-testid="feedback-text">Feedback</h3>
        <Header />
      </div>
    );
  }
}
