import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import GamePage from './pages/GamePage/GamePage';
import Settings from './pages/Settings/Settings';
import Feedback from './pages/feedback/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/game" component={ GamePage } />
        <Route path="/settings" component={ Settings } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/ranking" component={ Ranking } />
      </Switch>
    </BrowserRouter>
  );
}
