import React, { Component } from 'react';
import { Animated } from 'react-animated-css';

const styles = {
  barrageBox: {
    position: 'fixed',
    top: '46px',
    left: '8px',
    zIndex: 99,
    display: 'flex',
    alignItems: 'center',
  },
  barrageAvatar: {
    width: '32px',
    height: '32px',
    position: 'relative',
    zIndex: 99,
    borderRadius: '50%',
  },
  barrageName: {
    width: 'auto',
    height: '30px',
    borderRadius: '0 15px 15px 0',
    background: 'rgba(0, 0, 0, 0.3)',
    color: '#fff',
    textAlign: 'center',
    padding: '0 18px',
    boxSizing: 'border-box',
    lineHeight: '30px',
    marginLeft: '-8px',
    fontSize: '12px',
  },
};
export default class Barrage extends Component {
  state = {
    animation: true,
  };

  componentDidMount() {
    this.index = -1;
    this.barrageTimer();
  }

  barrageTimer = () => {
    const { barrageList } = this.props;
    clearTimeout(this.timer);
    if (!this.first) {
      this.first = true;
      this.duringTime = 2000;
    } else {
      this.duringTime = 5000;
    }
    this.timer = setTimeout(() => {
      if (!barrageList.length) {
        clearTimeout(this.timer);
        return;
      }
      if (this.index < barrageList.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
      this.setState({
        animation: true,
      });

      setTimeout(() => {
        this.setState({
          animation: false,
        });
      }, 3000);
      this.barrageTimer();
    }, this.duringTime);
  };

  render() {
    const { animation } = this.state;
    const { barrageList } = this.props;
    return (
      this.index > -1 && (
        <Animated
          animationIn="zoomIn"
          animationOut="zoomOut"
          isVisible={animation}
          style={styles.barrageBox}
        >
          <img style={styles.barrageAvatar} src={barrageList[this.index].img} alt="" />
          <div style={styles.barrageName}>{barrageList[this.index].text}</div>
        </Animated>
      )
    );
  }
}
