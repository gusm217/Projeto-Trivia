import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import './feedback.css';

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
        <div style={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '50vh' } }>
          <p data-testid="feedback-text">Podia ser melhor...</p>
          <p
            data-testid="feedback-total-question"
          >
            Número de acertos:
            {' '}
            {totalAssertions}

          </p>
          <p
            data-testid="feedback-total-score"
          >
            Pontuação total:
            {' '}
            {totalScore}

          </p>
        </div>
      );
    }
    return (
      <div style={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '50vh' } }>
        <p data-testid="feedback-text">Mandou bem!</p>
        <p
          data-testid="feedback-total-question"
        >
          Número de acertos:
          {' '}
          {totalAssertions}

        </p>
        <p
          data-testid="feedback-total-score"
        >
          Pontuação total:
          {' '}
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
        <div style={ { display: 'flex', justifyContent: 'center' } }>
          <Link to="ranking">
            <button style={ { marginRight: '10px' } } className="feedback-button" type="button" data-testid="btn-ranking">
              VER RANKING
            </button>
          </Link>
          <Link to="/">
            <button className="feedback-button" type="button" data-testid="btn-play-again">
              JOGAR NOVAMENTE
            </button>
          </Link>
        </div>
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
