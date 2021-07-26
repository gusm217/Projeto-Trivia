import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Countdown.css';

class Countdown extends React.Component {
  render() {
    const { timer } = this.props;
    return (
      <div>
        <h3 className={timer <= 10 ? "timer timer-danger" : "timer"}>
          {timer}
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timer: state.countDownReducer.timer,
});

Countdown.propTypes = {
  timer: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Countdown);
