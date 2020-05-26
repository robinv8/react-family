import React from 'react';

const styles = {
  toastWrap: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toastContentWrap: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 290,
    position: 'relative',
    paddingTop: 20,
  },
  toastContent: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  toastTitle: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 16,
    color: '#333333',
    width: '100%',
    textAlign: 'center',
  },
  toastWordsWrap: {
    width: '100%',
    marginTop: 15,
  },
  toastWords2: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 13,
    color: '#666',
    lineHeight: '22px',
  },
  top22: {
    marginTop: '16px',
  },
  line: {
    width: '100%',
    height: '1px',
    backgroundColor: '#DDD',
    marginTop: '20px',
  },
  toastConfirmWrap: {
    width: '100%',
    height: '48px',
    fontFamily: 'PingFangSC-Regular',
    fontSize: 16,
    color: '#FC4277',
    lineHeight: '48px',
    textAlign: 'center',
  },
};
export default class FitRule extends React.Component {
  closeRule = () => {
    const { closeRule } = this.props;
    closeRule();
  };

  render() {
    return (
      <div style={styles.toastWrap}>
        <div style={styles.toastContentWrap}>
          <div style={styles.toastContent}>
            <div style={styles.toastTitle}>信用卡奖励规则</div>
            <div style={styles.toastWordsWrap}>
              <div style={styles.toastWords2}>
                1、邀请好友申请信用卡，核卡成功后店长可获得奖励（若销卡则取消奖励资格）。
              </div>
              <div style={styles.toastWords2}>
                2、申请页所填手机号码和姓名需与在银行官网申请时所填写的一致，否则无法获得奖励。
              </div>
              <div style={styles.toastWords2}>
                3、每月25号结算上个月所有核卡成功的奖励，返现到钱包，可直接提现。
              </div>
            </div>
          </div>
          <div style={styles.line} />
          <div style={styles.toastConfirmWrap} onClick={() => this.closeRule()}>
            知道了
          </div>
        </div>
      </div>
    );
  }
}
