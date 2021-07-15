import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import GamePage from './pages/GamePage';
import Settings from './pages/Settings';
import logo from './trivia.png';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/settings" component={ Settings } />
            <Route exact path="/gamepage" component={ GamePage } />
            <Route exact path="/questions" component={ Questions } />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}
