import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './home.css';
import logo from '../../trivia.png';
import { saveToken, submitLogin } from '../../actions';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      playerName: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePlayButton = this.handlePlayButton.bind(this);
    this.renderPlayButton = this.renderPlayButton.bind(this);
    this.renderSettingsButton = this.renderSettingsButton.bind(this);
    this.savePlayerToLocalStorage = this.savePlayerToLocalStorage.bind(this);
  }

  handleChange(target) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handlePlayButton() {
    const { playerName, email } = this.state;
    const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (playerName.length && validEmail.test(email)) {
      return false;
    }
    return true;
  }

  savePlayerToLocalStorage() {
    const { playerName, email } = this.state;
    localStorage.setItem('state', JSON.stringify({ player: {
      name: playerName, assertions: 0, score: 0, gravatarEmail: email,
    } }));
  }

  renderPlayButton() {
    const { dispatchToken, dispatchLogin } = this.props;
    const { email, playerName } = this.state;

    return (
      <div>
        <Link to="/game" className="link-button">
          <button
            disabled={ this.handlePlayButton() }
            type="button"
            className="btn-play"
            data-testid="btn-play"
            onClick={ () => {
              dispatchToken();
              dispatchLogin(email, playerName);
              this.savePlayerToLocalStorage();
            } }
          >
            Jogar
          </button>
        </Link>
      </div>
    );
  }

  renderSettingsButton() {
    return (
      <button
        type="button"
        data-testid="btn-settings"
        className="btn-settings"
      >
        <Link to="/settings">Configurações</Link>
      </button>
    );
  }

  render() {
    const { email, playerName } = this.state;

    return (
      <div className="home">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <form className="form">
          <label htmlFor="input-name">
            <input
              autoComplete="off"
              className="input-name"
              name="playerName"
              value={ playerName }
              type="text"
              id="input-name"
              data-testid="input-player-name"
              placeholder="Nome"
              onChange={ ({ target }) => { this.handleChange(target); } }
            />
          </label>
          <label htmlFor="input-email">
            <input
              className="input-email"
              name="email"
              value={ email }
              type="email"
              id="input-email"
              data-testid="input-gravatar-email"
              placeholder="Email"
              onChange={ ({ target }) => { this.handleChange(target); } }
            />
          </label>
          {this.renderPlayButton()}
          {this.renderSettingsButton()}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchToken: () => dispatch(saveToken()),
  dispatchLogin: (email, playerName) => dispatch(submitLogin(email, playerName)),
});

export default connect(null, mapDispatchToProps)(Home);

Home.propTypes = {
  dispatchToken: PropTypes.func,
}.isRequired;
