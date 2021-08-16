import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import './header.css';

class Header extends Component {
  render() {
    const { playerName, email, totalScore } = this.props;

    return (
      <header>
        <div className="player">
          <img src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` } alt={ playerName } data-testid="header-profile-picture" />
          <label className="user-name" htmlFor="user-name">
            Jogador:
            <span id="user-name" data-testid="header-player-name">{ playerName }</span>
          </label>
        </div>
        <div>
          Pontos:
          <span data-testid="header-score">
            {totalScore}
          </span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  playerName: PropTypes.string,
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.login.email,
  playerName: state.login.playerName,
  totalScore: state.ScoreReducer.totalScore,
});

export default connect(mapStateToProps)(Header);
