import React, { Component } from 'react';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bgColor: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.4)',
  },
  modalWrap: {
    width: '72%',
    position: 'fixed',
    top: '36%',
    left: '14%',
    zIndex: 99,
    background: '#fff',
    borderRadius: '8px',
    padding: '36px 20px 16px',
    boxSizing: 'border-box',
    boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.2)',
  },
  textBox: {
    color: '#333',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '28px',
    lineHeight: '20px',
  },
  btn: {
    color: '#AD5F19',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '16px',
    width: '100%',
    borderRadius: '22px',
    background: 'linear-gradient(0deg, #FFBB28 0%, #FFE28B 100%)',
    textAlign: 'center',
    lineHeight: '44px',
  },
};
export default class InviteModal extends Component {
  toInvite = () => {
    const { toInvite } = this.props;
    toInvite();
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.bgColor} />
        <div style={styles.modalWrap}>
          <div style={styles.textBox}>
            <div>同城联盟为邀请制</div>
            <div>好友数≥3人，有机会被邀请哦</div>
          </div>
          <div style={styles.btn} onClick={this.toInvite}>
            马上去邀请
          </div>
        </div>
      </div>
    );
  }
}
