import React, { Component } from 'react';
import Questions from '../../components/Questions';
import Header from '../../components/Header';

class GamePage extends Component {
  render() {
    return (
      <>
        <Header />
        <Questions />
      </>
    );
  }
}

export default GamePage;
