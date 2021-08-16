import { SUBMIT_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  playerName: '',

};

function login(state = INITIAL_STATE, action) {
  const { type, email, playerName } = action;
  switch (type) {
  case SUBMIT_LOGIN:
    return { ...state, email, playerName };
  default:
    return state;
  }
}

export default login;
