import React from 'react';
import { Link } from 'react-router-dom';
import { creditCardMount } from '../../service/api';
// import { Toast } from 'antd-mobile';
import FitRule from '../../components/CreditCard/Rule';
import { getQueryString } from '../../utils/tools';

const styles = {
  container: {
    background: 'rgba(240, 240, 243)',
  },
  head: {
    width: '100%',
    height: '362px',
    position: 'relative',
  },
  headImg: {
    width: '100%',
    height: '100%',
  },
  ruleBtn: {
    position: 'absolute',
    top: '12px',
    right: 0,
    width: '68px',
    height: '24px',
    background: 'linear-gradient(90deg, #E8C198 0%, #D3A97B 100%)',
    borderRadius: '12px 0 0 12px',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: '24px',
    textShadow: '0 1px 2px rgba(153,123,90,0.40)',
  },
  inviteBtn: {
    width: '260px',
    height: '44px',
    background: 'linear-gradient(180deg, #8594C7 0%, #4C5B90 100%)',
    boxShadow: 'inset 0 4px 20px 0 rgba(127,142,194, 0.8)',
    borderRadius: '22px',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '16px',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: '44px',
    margin: 'auto',
  },
  bgSpe: {
    background: 'linear-gradient(180deg, rgb(240, 240, 243) 0%, #FBFAFC 57%)',
  },
  awardWrap: {
    padding: '20px 20px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  left: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#333333',
    letterSpacing: 0,
    lineHeight: '12px',
  },
  leftText: {
    color: '#FF0000',
  },
  right: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#B5D77',
    letterSpacing: 0,
    lineHeight: '12px',
  },
  cardList: {
    width: '100%',
    display: 'block',
  },
  canvas: {
    width: '375px',
    height: '667px',
  },
};
export default class Card extends React.Component {
  state = {
    amount: '0.00',
    showRule: false,
    isApp: false,
  };

  componentDidMount() {
    const isApp = !!getQueryString('isApp');
    this.inviteCode = JSON.parse(localStorage.getItem('inviteCode'));
    this.setState({
      isApp,
    });
    this.getMount();
  }

  jumpPage = () => {
    const params = {
      info: {
        url: `${window.document.activeH5Url}/creditCardDetail`,
        type: 1,
        title: '余额明细',
      },
      type: 'jumpPage',
    };
    window.postMessage(JSON.stringify(params));
  };

  openRule = () => {
    this.setState({
      showRule: true,
    });
  };

  closeRule = () => {
    this.setState({
      showRule: false,
    });
  };

  openShare = () => {
    const params = {
      isVerifity: true,
      isShare: true,
      shareInfo: {
        url: 'https://www.vxiaoke360.com/H5/mlsh-download/index.html',
        shareTkl: `来米粒生活，办免费信用卡！\n审批快，额度高，下卡快，名额有限，快来领~\n-------------\n下载链接：https://www.vxiaoke360.com/H5/mlsh-download/index.html\n邀请码：${this.inviteCode}`,
        shareTitle: '米粒生活',
        shareDesc: `来米粒生活\n每天都是双十一`,
        isShowCopyText: false,
        shareKey: 'rn_getCreditCardShareView',
      },
    };

    setTimeout(() => {
      window.postMessage(JSON.stringify(params), '*');
    }, 100);
  };

  getMount = async () => {
    const res = await creditCardMount();
    if (res) {
      this.setState({
        amount: res.amount,
      });
    }
  };

  render() {
    const { isApp, showRule, amount } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.head}>
          <img style={styles.headImg} src={require('@assets/CreditCard/card-head.png')} alt="" />
          <div style={styles.ruleBtn} onClick={this.openRule}>
            奖励规则
          </div>
        </div>
        <div style={styles.bgSpe}>
          <div style={styles.inviteBtn} onClick={this.openShare}>
            邀请好友
          </div>
          {isApp ? (
            <div style={styles.awardWrap} onClick={() => this.jumpPage()}>
              <div style={styles.left}>
                已获得办卡奖励
                <span style={styles.leftText}>{amount}</span>元
              </div>
              <div style={styles.right}>查看明细></div>
            </div>
          ) : (
            <Link style={styles.awardWrap} to="/creditCardDetail">
              <div style={styles.left}>
                已获得办卡奖励
                <span style={styles.leftText}>{amount}</span>元
              </div>
              <div style={styles.right}>查看明细></div>
            </Link>
          )}
        </div>
        <img style={styles.cardList} src="https://image.vxiaoke360.com/card-list.png" alt="" />
        <img style={styles.cardList} src="https://image.vxiaoke360.com/card-list1.png" alt="" />
        {showRule ? <FitRule closeRule={this.closeRule} /> : null}
      </div>
    );
  }
}
