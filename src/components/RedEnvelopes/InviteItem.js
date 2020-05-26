import React, { Component } from 'react';

const styles = {
  itemContainer: {
    background: 'linear-gradient(90deg, #DF1D00, #E94313)',
    position: 'relative',
    borderRadius: '10px',
    marginBottom: '10px',
    display: 'flex',
    height: '80px',
  },
  numWrap: {
    height: '100%',
    width: '56px',
    borderRadius: '0 30px 30px 0',
    background: 'linear-gradient(90deg, #E73905, #E73905)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '2px 0 5px rgba(58, 59, 60, 0.2)',
    marginRight: '20px',
    position: 'relative',
  },
  numText: {
    color: '#FFD800',
    fontSize: '20px',
    fontFamily: 'PingFangSC-Medium',
  },
  numIcon: {
    width: '27px',
    height: '25px',
    position: 'absolute',
    right: '-12px',
    top: '29px',
  },
  itemInfoWrap: {
    padding: '9px 0',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  itemInfoBox: {
    display: 'flex',
    alignContent: 'space-between',
    flexWrap: 'wrap',
    flex: 1,
  },
  name: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '15px',
    color: '#FFDBA2',
    marginBottom: '8px',
    width: '100%',
  },
  itemText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#FFA347',
    marginTop: '4px',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    marginRight: '20px',
  },
};
export default class InviteItem extends Component {
  state = {
    icon: [
      require('@assets/RedEnvelopes/crown1.png'),
      require('@assets/RedEnvelopes/crown2.png'),
      require('@assets/RedEnvelopes/crown3.png'),
    ],
  };

  render() {
    const { icon } = this.state;
    const { info, index } = this.props;
    return (
      <div style={styles.itemContainer}>
        <div style={styles.numWrap}>
          <div style={styles.numText}>{index + 1}</div>
          {index < 3 && <img style={styles.numIcon} src={icon[index]} alt="" />}
        </div>
        <div style={styles.itemInfoWrap}>
          <img style={styles.avatar} src={info.headimgurl} alt="" />
          <div style={styles.itemInfoBox}>
            <div style={styles.name}>
              {info.nickname && info.nickname.length > 11
                ? `${info.nickname.substr(0, 11)}`
                : info.nickname}
            </div>
            <div>
              <div style={styles.itemText}>
                邀请人数：
                {info.number}
              </div>
              <div style={styles.itemText}>
                奖励金额：
                {info.total}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
