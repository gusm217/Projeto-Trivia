import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Settings from './pages/Settings';
import './App.css';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/" component={ Login } />
        <Route exact path="/quiz" component={ Quiz } />
        <Route exact path="/feedback" component={ Feedback } />
        <Route exact path="/ranking" component={ Ranking } />
      </Switch>
    </div>
  );
}
