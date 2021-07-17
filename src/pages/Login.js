import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { fetchApi, sendUserData } from '../actions';

// const recevedEmail = new RegExp('^[^s@]+@[^s@]+$.\\S+');
const recevedEmail = new RegExp('\\S+@\\S+\\.\\S+');

class Login extends Component {
  constructor() {
    super();

    this.form = this.form.bind(this);
    this.clickJogarBtn = this.clickJogarBtn.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeButton = this.handleChangeButton.bind(this);
    this.state = {
      name: '',
      email: '',
      isDisabled: true,
      // emailHash: '', // Foi criado no Redux
    };
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleChangeButton() {
    const { email, name } = this.state;

    if (recevedEmail.test(email) && name.length !== 0) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  form() {
    const { name, email } = this.state;
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id="name"
            value={ name }
            onChange={ this.handleChangeName }
            data-testid="input-player-name"
            onKeyUp={ this.handleChangeButton }
          />
        </label>

        <label htmlFor="name">
          Email:
          <input
            type="Email"
            id="email"
            value={ email }
            onChange={ this.handleChangeEmail }
            data-testid="input-gravatar-email"
            onKeyUp={ this.handleChangeButton }
          />
        </label>
      </form>
    );
  }

  clickJogarBtn() {
    const { fetch, sendLogin } = this.props;
    const { name, email } = this.state;
    const hashToEmail = md5(email).toString();
    sendLogin({ name, email, emailHash: hashToEmail });

    fetch();
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <div>
        {this.form()}
        <DelayLink delay={ 2000 } to="/game">
          <button
            disabled={ isDisabled }
            data-testid="btn-play"
            type="button"
            // onClick={ () => fetch() }
            onClick={ () => this.clickJogarBtn() }
          >
            Jogar
          </button>
        </DelayLink>
        <Link to="/settings">
          <button
            data-testid="btn-settings"
            type="button"
          >
            Configurações
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetch: (state) => dispatch(fetchApi(state)),
  sendLogin: (state) => dispatch(sendUserData(state)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  fetch: PropTypes.func,
}.isRequired;
