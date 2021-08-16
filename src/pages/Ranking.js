import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking: false,
    };
    this.handleLocalStorage = this.handleLocalStorage.bind(this);
  }

  componentDidMount() {
    this.handleLocalStorage();
  }

  handleLocalStorage() {
    const currentRank = JSON.parse(localStorage.getItem('ranking'));
    this.setState(() => ({
      ranking: currentRank,
    }));
  }

  render() {
    const { ranking } = this.state;
    return (
      <section>
        <h2 data-testid="ranking-title">Ranking</h2>
        <table>
          <thead>
            <th>Gravatar</th>
            <th>Nome do jogador</th>
            <th>Pontuação</th>
          </thead>
          <tbody>
            { ranking ? ranking.sort((a, b) => b.score - a.score)
              .map(({ name, score, picture }, index) => (
                <tr key={ index }>
                  <td><img src={ picture } alt="profile" /></td>
                  <td data-testid={ `player-name-${index}` }>{name}</td>
                  <td data-testid={ `player-score-${index}` }>{score}</td>
                </tr>
              )) : null }
          </tbody>
        </table>
        <Link to="/">
          <button type="button" data-testid="btn-go-home">
            Home
          </button>
        </Link>
      </section>
    );
  }
}

export default Ranking;
