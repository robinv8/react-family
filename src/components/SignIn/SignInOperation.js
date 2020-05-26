import React, { Component } from 'react';

const fontFamilyNormal = 'PingFangSC-Regular';
const fontFamilyBold = 'PingFangSC-Medium';

const styles = {
  container: {
    background: '#fff',
    borderRadius: '8px',
    padding: '20px 12px 14px',
    boxSizing: 'border-box',
    marginBottom: '24px',
  },
  title: {
    borderLeft: '4px solid #333',
    color: '#333',
    fontFamily: fontFamilyBold,
    fontSize: '16px',
    paddingLeft: '8px',
    lineHeight: '16px',
    marginBottom: '30px',
  },
  operationWrap: {
    marginBottom: '16px',
    display: 'flex',
  },
  operationIcon: {
    marginRight: '12px',
    width: '32px',
    height: '32px',
  },
  operationBox: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  },
  operationBorder: {
    borderBottom: '1px solid #EBEBEB',
    paddingBottom: '20px',
  },
  operationTitleBox: {
    display: 'flex',
    alignItems: 'center',
  },
  operationTitle: {
    color: '#333',
    fontFamily: fontFamilyBold,
    fontSize: '14px',
  },
  operationText: {
    color: '#999',
    fontFamily: fontFamilyNormal,
    fontSize: '12px',
    marginTop: '8px',
  },
  btn1: {
    color: '#fff',
    fontFamily: fontFamilyBold,
    fontSize: '12px',
    textAlign: 'center',
    lineHeight: '28px',
    background: 'linear-gradient(-45deg, #FB9D54 0%, #FF5947 100%)',
    borderRadius: '15px',
    width: '72px',
    height: '28px',
  },
  btn2: {
    color: '#fff',
    fontFamily: fontFamilyBold,
    fontSize: '12px',
    textAlign: 'center',
    lineHeight: '28px',
    background: '#D8D8D8',
    borderRadius: '15px',
    height: '28px',
    width: '66px',
  },
  coinBox: {
    position: 'relative',
    marginLeft: '14px',
  },
  coinImg: {
    position: 'absolute',
    top: '-1px',
    left: 0,
    width: '20px',
    height: '20px',
  },
  coinText: {
    color: '#992F1F',
    fontFamily: fontFamilyBold,
    fontSize: '12px',
    background: '#FFF8D9',
    borderRadius: '10px',
    lineHeight: '18px',
    padding: '0 8px 0 22px',
  },
  coinBtnWrap: {
    background: 'linear-gradient(180deg, #FFF19C 0%, #FEDC5D 100%)',
    width: '36px',
    height: '36px',
    padding: '4px',
    boxSizing: 'border-box',
    borderRadius: '50%',
  },
  coinBtnBox: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'linear-gradient(180deg, #FFCE43 0%, #FFCE43 100%)',
    boxShadow: 'inset 0 1px 2px 0 #F4A93E',
    lineHeight: '28px',
    textAlign: 'center',
    color: '#AD2323',
    fontFamily: fontFamilyBold,
    fontSize: '12px',
  },
};
export default class SignInOperation extends Component {
  getCoin = type => {
    const { getCoin } = this.props;
    getCoin(type);
  };

  getOperation = type => {
    const { getOperation } = this.props;
    getOperation(type);
  };

  renderBtn = (type, data) => {
    // type: 1 邀请好友，2 通知好友，3 去下单
    // data.status: 0 没有开始，1 有待领取，2 已完成
    let btnText = '';
    if (type === 1) {
      btnText = '邀好友';
    } else if (type === 2) {
      btnText = '通知好友';
    } else {
      btnText = '去下单';
    }
    // 按钮展示逻辑
    if (data.status === 2) {
      return <div style={styles.btn2}>已完成</div>;
    }
    if (data.status === 0) {
      return (
        <div style={styles.btn1} onClick={() => this.getOperation(type)}>
          {btnText}
        </div>
      );
    }
    return (
      <div className="coinBtnWrap" style={styles.coinBtnWrap}>
        <div onClick={() => this.getCoin(type)} style={styles.coinBtnBox}>
          +{data.pendingPickGoldRiceNum}
        </div>
      </div>
    );
  };

  render() {
    const { data } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.title}>做任务赚米粒</div>
        <div style={styles.operationWrap}>
          <img style={styles.operationIcon} src={require('@assets/SignIn/icon-sendFriends.png')} />
          <div style={{ ...styles.operationBox, ...styles.operationBorder }}>
            <div>
              <div style={styles.operationTitleBox}>
                <div style={styles.operationTitle}>送好友免单福利</div>
                <div style={styles.coinBox}>
                  <img
                    style={styles.coinImg}
                    src={require('@assets/SignIn/icon-coin.png')}
                    alt=""
                  />
                  <div style={styles.coinText}>+10</div>
                </div>
              </div>
              <div style={styles.operationText}>好友注册成功可得，每天上限30米粒</div>
            </div>
            {data.inviteGoldRiceVO && this.renderBtn(1, data.inviteGoldRiceVO)}
          </div>
        </div>
        <div style={styles.operationWrap}>
          <img
            style={styles.operationIcon}
            src={require('@assets/SignIn/icon-friendsShopping.png')}
          />
          <div style={{ ...styles.operationBox, ...styles.operationBorder }}>
            <div>
              <div style={styles.operationTitleBox}>
                <div style={styles.operationTitle}>好友完成首次购物</div>
                <div style={styles.coinBox}>
                  <img
                    style={styles.coinImg}
                    src={require('@assets/SignIn/icon-coin.png')}
                    alt=""
                  />
                  <div style={styles.coinText}>+20</div>
                </div>
              </div>
              <div style={styles.operationText}>每天上限60米粒,确认收货后7天发放</div>
            </div>
            {data.friendBuyGoldRIceVO && this.renderBtn(2, data.friendBuyGoldRIceVO)}
          </div>
        </div>
        <div style={styles.operationWrap}>
          <img style={styles.operationIcon} src={require('@assets/SignIn/icon-shopping.png')} />
          <div style={styles.operationBox}>
            <div>
              <div style={styles.operationTitleBox}>
                <div style={styles.operationTitle}>每日购物</div>
                <div style={styles.coinBox}>
                  <img
                    style={styles.coinImg}
                    src={require('@assets/SignIn/icon-coin.png')}
                    alt=""
                  />
                  <div style={styles.coinText}>+15</div>
                </div>
              </div>
              <div style={styles.operationText}>每天首次购物可得,确认收货后7天发放</div>
            </div>
            {data.friendBuyGoldRIceVO && this.renderBtn(3, data.mySelfBuyGoldRiceVO)}
          </div>
        </div>
      </div>
    );
  }
}
