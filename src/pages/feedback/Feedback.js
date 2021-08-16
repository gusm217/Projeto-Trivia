import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: props.totalScore,
      totalAssertions: props.totalAssertions,
    };
    this.renderFeedback = this.renderFeedback.bind(this);
  }

  renderFeedback() {
    const worstScore = 3;
    const { totalScore, totalAssertions } = this.state;
    if (totalAssertions < worstScore) {
      return (
        <div>
          <p data-testid="feedback-text">Podia ser melhor...</p>
          <p
            data-testid="feedback-total-question"
          >
            {totalAssertions}

          </p>
          <p
            data-testid="feedback-total-score"
          >
            {totalScore}

          </p>
        </div>
      );
    }
    return (
      <div>
        <p data-testid="feedback-text">Mandou bem!</p>
        <p
          data-testid="feedback-total-question"
        >
          {totalAssertions}

        </p>
        <p
          data-testid="feedback-total-score"
        >
          {totalScore}

        </p>
      </div>

    );
  }

  render() {
    return (
      <>
        <Header />
        { this.renderFeedback() }
        <Link to="ranking">
          <button type="button" data-testid="btn-ranking">
            VER RANKING
          </button>
        </Link>
        <Link to="/">
          <button type="button" data-testid="btn-play-again">
            Jogar Novamente
          </button>
        </Link>
      </>
    );
  }
}

Feedback.propTypes = {
  totalScore: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  totalScore: state.ScoreReducer.totalScore,
  totalAssertions: state.ScoreReducer.totalAssertions,
});

export default connect(mapStateToProps)(Feedback);
