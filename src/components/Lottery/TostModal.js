import React, { Component } from 'react';
import { Icon } from 'antd-mobile';

const styles = {
  wrap: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    paddingTop: '80px',
    zIndex: 10,
  },
  con: {
    position: 'relative',
    width: '303px',
    margin: 'auto',
  },
  redBg: {
    width: '100%',
  },
  infoWrap: {
    width: '100%',
    position: 'absolute',
    top: '140px',
    left: 0,
    fontFamily: 'PingFangSC-Regular',
  },
  text1: {
    fontSize: '14px',
    color: '#fff',
    textAlign: 'center',
  },
  text2: {
    fontSize: '36px',
    color: '#fff',
    textAlign: 'center',
    margin: '24px  auto 22px',
  },
  text3: {
    fontSize: '16px',
  },
  text4: {
    fontSize: '16px',
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    width: '120px',
    height: '40px',
    background: '#FDD93B',
    borderRadius: '20px',
    fontSize: '16px',
    color: '#992F1F',
    textAlign: 'center',
    lineHeight: '40px',
    margin: '24px auto 0',
    fontFamily: 'PingFangSC-Medium',
  },
  warnWrap: {
    width: '280px',
    height: '200px',
    borderRadius: '8px',
    background: '#fff',
    margin: '140px auto 0',
    position: 'relative',
  },
  warnText1: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: '18px',
    color: '#333',
    textAlign: 'center',
    paddingTop: '36px',
  },
  warnText2: {
    fontSize: '14px',
    color: '#999',
    textAlign: 'center',
    margin: '14px auto 36px',
  },
  btn2: {
    width: '184px',
    height: '46px',
    background: 'linear-gradient(135deg, #FF7840 0%, #FE2866 100%)',
    borderRadius: '23px',
    fontSize: '18px',
    color: '#FFF',
    textAlign: 'center',
    lineHeight: '46px',
    fontFamily: 'PingFangSC-Medium',
    margin: 'auto',
  },
  close: {
    width: '24px',
    height: '24px',
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
};

export default class ToastModal extends Component {
  componentDidMount() {}

  render() {
    const { data, toastState, jumpPage } = this.props;
    return (
      <div style={styles.wrap}>
        {data.toastType === 'red' && (
          <div style={styles.con}>
            <img style={styles.redBg} src={require('@assets/Lottery/toast-bg.png')} />
            {data.type === 'money' ? (
              <div style={styles.infoWrap}>
                <div style={styles.text1}>已获得现金红包</div>
                <div style={styles.text2}>
                  {data.money}
                  <span style={styles.text3}>元</span>
                </div>
                <div style={styles.text4}>红包已发放入账户余额</div>
                <div style={styles.btn} onClick={() => toastState()}>
                  确定
                </div>
              </div>
            ) : (
              <div style={styles.infoWrap}>
                <div style={styles.text1}>已获得奖励</div>
                <div style={styles.text2}>免单一次</div>
                <div style={styles.text4}>24小时内有效</div>
                <div style={styles.btn} onClick={() => jumpPage('free')}>
                  挑选商品
                </div>
              </div>
            )}
          </div>
        )}
        {data.toastType === 'toast' && (
          <div style={styles.warnWrap}>
            <div style={styles.warnText1}>不足50米粒</div>
            <div style={styles.warnText2}>快去做任务赚取米粒吧</div>
            <div style={styles.btn2} onClick={() => jumpPage('signIn')}>
              去做任务
            </div>
            <Icon type="cross" color="#999" style={styles.close} onClick={() => toastState()} />
          </div>
        )}
      </div>
    );
  }
}
