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
      <section style={ { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' } }>
        <h2 data-testid="ranking-title">Ranking</h2>
        <table>
          <tbody>
            { ranking ? ranking.sort((a, b) => b.score - a.score)
              .map(({ name, score, picture }, index) => (
                <tr style={ { display: 'flex', width: '100vw', justifyContent: 'space-evenly', alignItems: 'center' } } key={ index }>
                  <div style={ { width: '200px', display: 'flex', justifyContent: 'center' } }>
                    <td><img src={ picture } alt="profile" /></td>
                  </div>
                  <div style={ { width: '200px', display: 'flex', justifyContent: 'center' } }>
                    <td data-testid={ `player-name-${index}` }>{name}</td>
                  </div>
                  <div style={ { width: '200px', display: 'flex', justifyContent: 'center' } }>
                    <td data-testid={ `player-score-${index}` }>{score}</td>
                  </div>
                </tr>
              )) : null }
          </tbody>
        </table>
        <Link to="/">
          <button style={ { marginTop: '30px' } } className="feedback-button" type="button" data-testid="btn-go-home">
            HOME
          </button>
        </Link>
      </section>
    );
  }
}

export default Ranking;
