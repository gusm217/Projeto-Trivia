import { combineReducers } from 'redux';
import homeReducer from './HomeReducer';
import login from './login';
import ScoreReducer from './ScoreReducer';

const rootReducer = combineReducers({ homeReducer, login, ScoreReducer });

export default rootReducer;
