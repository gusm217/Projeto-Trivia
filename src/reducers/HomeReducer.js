import { REQUEST_TOKEN, SUBMIT_TOKEN, RECEIVE_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  token: '',
  questions: [],
  loading: false,
};

function homeReducer(state = INITIAL_STATE, action) {
  const { type, loading, token, questions } = action;
  switch (type) {
  case REQUEST_TOKEN:
    return { ...state, loading };

  case SUBMIT_TOKEN:
    return { ...state, loading, token };

  case RECEIVE_QUESTIONS:
    return {
      ...state,
      questions,
    };

  default:
    return state;
  }
}

export default homeReducer;
