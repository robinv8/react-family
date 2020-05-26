import React, { Component } from 'react';
import { Toast, Modal } from 'antd-mobile';
import SignInPanel from '../../components/SignIn/SignInPanel';
import SignInOperation from '../../components/SignIn/SignInOperation';
import FriendsItem from '../../components/SignIn/FriendsItem';
import SignInModal from '../../components/SignIn/SignInModal';
import {
  getSignIn,
  getSignInInfo,
  getCoin,
  getOneYuanProduct,
  getSignInFriends,
  getNewPeopleProduct,
} from '../../service/api';
import './Style.css';

const fontFamilyNormal = 'PingFangSC-Regular';

const styles = {
  container: {
    background: '#f0f1f5',
  },
  headWrap: {
    position: 'relative',
  },
  headBg: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  headBox: {
    width: '100%',
    padding: '12px',
    position: 'relative',
    zIndex: 9,
    boxSizing: 'border-box',
  },
  coinListUrl: {
    color: '#fff',
    fontFamily: fontFamilyNormal,
    fontSize: '13px',
    textAlign: 'right',
    marginBottom: '22px',
  },
  coinCountWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '36px',
  },
  countTitleWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '8px',
  },
  countIcon: {
    width: '16px',
    height: '16px',
    marginRight: '3px',
  },
  countText: {
    color: '#fff',
    fontFamily: fontFamilyNormal,
    fontSize: '14px',
  },
  countSymbol: {
    color: '#fff',
    fontFamily: fontFamilyNormal,
    fontSize: '12px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '1px solid #fff',
    textAlign: 'center',
    lineHeight: '14px',
    marginLeft: '3px',
  },
  countNum: {
    color: '#fff',
    fontFamily: 'DINAlternate-Bold',
    fontSize: '30px',
    textAlign: 'center',
  },
  infoWrap: {
    padding: '0 12px 82px',
    boxSizing: 'border-box',
  },
  bannerBox: {
    position: 'relative',
    width: '100%',
    margin: '6px 0 25px',
  },
  banner: {
    width: '100%',
  },
  bannerTextBox: {
    width: '100%',
    position: 'absolute',
    left: 0,
    top: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '20px',
    boxSizing: 'border-box',
  },
  bannerText: {
    height: '20px',
    padding: '0 8px',
    textAlign: 'center',
    background: '#AD2323',
    borderRadius: '10px',
    color: '#fff',
    fontFamily: fontFamilyNormal,
    fontSize: '12px',
    lineHeight: '20px',
  },
  bannerIcon: {
    position: 'absolute',
    right: '12px',
    top: '16px',
    width: '18%',
  },
  ruleBtn: {
    textAlign: 'center',
    color: '#333',
    fontFamily: fontFamilyNormal,
    fontSize: '14px',
    margin: '24px 0 0',
  },
};
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      signInInfo: {},
      panelList: ['10', '10', '10', '15', '10', '10', '20'],
      isShowFriends: false,
      isShowSignModal: false,
      shareParams: null,
      pList: [],
      signInFriends: [],
      isQuestionModal: false,
      newPeoplelist: [],
    };
  }

  componentDidMount() {
    this.canDo = true;
    this.inviteCode = JSON.parse(localStorage.getItem('inviteCode'));
    this.getSignIn();
    this.getOneYuanProduct();
    this.getSignInFriends();
    this.getNewPeopleProduct();
  }

  closeFriendModal = () => {
    this.setState({
      isShowFriends: false,
    });
  };

  closeSignInModal = () => {
    this.setState({
      isShowSignModal: false,
    });
  };

  handleQuestionModal = boo => {
    this.setState({
      isQuestionModal: boo,
    });
  };

  // 通知好友首购
  answerFriends = () => {
    const { pList, shareParams } = this.state;
    console.log('通知好友首购-----------', pList);
    if (pList.todayProducts && pList.todayProducts.length) {
      if (this.canDo) {
        this.canDo = false;
        setTimeout(() => {
          this.canDo = true;
        }, 1500);

        const params = {
          isVerifity: true,
          isShare: true,
          isHiddenFloatBtn: true,
          // type: 0,
          shareInfo: {
            shareText: `${window.document.activeH5Url}/oneYuanShare/0`,
            shareTitle: '1元抢购，每天不限量',
            shareTkl: `米粒生活独家福利：\n1元商品，每天不限量，疯抢中！\n还包邮哦，千万别错过\n-------------\n下载链接：https://www.vxiaoke360.com/H5/mlsh-download/index.html\n邀请码：${this.inviteCode}`,
            shareDesc: `来米粒生活\n每天都是双十一`,
            shareKey: 'rn_getSnapupShareViewWithImgUrl',
            shareParams: shareParams,
            isShowWeChat: true,
            isShowFriend: true,
            isShowCopyText: false,
            url: 'https://www.vxiaoke360.com/H5/mlsh-download/index.html',
            isShowCopyLink: true,
            isShowSaveImg: true,
          },
        };

        // 埋点参数
        const statisticsParams = {
          isVerifity: true,
          isStatistics: true,
          statisticsInfo: {
            eventId: 'signin_Notif',
            eventParams: {},
          },
        };
        console.log('分享参数-----------', params);

        setTimeout(() => {
          window.postMessage(JSON.stringify(params), '*');
        }, 100);
        setTimeout(() => {
          window.postMessage(JSON.stringify(statisticsParams), '*');
        }, 3000);
      }
    } else {
      Toast.info('商品列表为空');
    }
  };

  // 分享新人0元购
  newPeopleShare = () => {
    const { newPeoplelist } = this.state;
    if (newPeoplelist && newPeoplelist.length) {
      const params = {
        pList: newPeoplelist[0].productList,
        type: 'newPeopleCanvas',
        url: `${window.document.activeH5Url}/newPeopleShare`,
        tkl: `米粒生活温馨提示：\n您的免单商品还未领取，再不来就要被抢没啦！\n还包邮哦，千万别错过！\n-------------\n下载链接：https://www.vxiaoke360.com/H5/mlsh-download/index.html\n邀请码：`,
        showShare: true,
        shareTitle: '新人免单 真正0元购',
        shareDesc: `来米粒生活\n每天都是双十一`,
        isBackIntercept: false,
      };

      // 埋点参数
      const statisticsParams = {
        isVerifity: true,
        isStatistics: true,
        statisticsInfo: {
          eventId: 'signin_Invite',
          eventParams: {},
        },
      };
      setTimeout(() => {
        window.postMessage(JSON.stringify(params), '*');
      }, 200);
      setTimeout(() => {
        window.postMessage(JSON.stringify(statisticsParams), '*');
      }, 3000);
    }
  };

  // 邀请及跳转操作
  getOperation = type => {
    // type: 1 邀请好友，2 通知好友，3 去下单
    const { signInFriends } = this.state;
    if (type === 1) {
      this.newPeopleShare();
    } else if (type === 2) {
      if (signInFriends && signInFriends.length > 0) {
        this.setState({
          isShowFriends: true,
        });
      } else {
        this.answerFriends();
      }
    } else {
      const params = {
        type: 'native',
        pageKey: 'homePageFeaturLocation',
      };

      // 埋点
      const statisticsParams = {
        isVerifity: true,
        isStatistics: true,
        statisticsInfo: {
          eventId: 'signin_GoHome',
          eventParams: {},
        },
      };
      setTimeout(() => {
        window.postMessage(JSON.stringify(statisticsParams), '*');
      }, 3000);

      this.jumpPage('app', params);
    }
  };

  jumpPage = (type, params) => {
    let jumpData = {};

    if (type === 'h5') {
      let url = '';
      if (params === 'signInRule') {
        url = `${window.document.activeH5Url}/signInRule`;
        jumpData = {
          routeName: 'WebView',
          params: {
            title: '规则',
            src: url,
          },
        };
      }

      if (params === 'signInDetail') {
        url = `${window.document.activeH5Url}/signInDetail`;
        jumpData = {
          routeName: 'WebView',
          params: {
            title: '米粒明细',
            src: url,
          },
        };
      }

      if (params === 'lottery') {
        url = `${window.document.activeH5Url}/lottery`;
        jumpData = {
          routeName: 'WebView',
          params: {
            title: '大转盘抽奖',
            src: url,
          },
        };
        this.setState({
          isShowSignModal: false,
        });

        // 埋点
        const statisticsParams = {
          isVerifity: true,
          isStatistics: true,
          statisticsInfo: {
            eventId: 'signin_Banner',
            eventParams: {},
          },
        };
        setTimeout(() => {
          window.postMessage(JSON.stringify(statisticsParams), '*');
        }, 3000);
      }
    } else {
      jumpData = params;
    }

    const data = {
      isVerifity: true,
      isJump: true,
      jumpInfo: jumpData,
    };
    console.log('jumpPage-------', data);

    window.postMessage(JSON.stringify(data));
  };

  /**
   * 接口请求
   */
  // 签到验证
  async getSignIn() {
    Toast.loading('加载中...', 0);
    const res = await getSignIn();

    if (res && !res.msg) {
      Toast.hide();
      this.setState(
        {
          signInInfo: res,
        },
        () => {
          this.getSignInInfo(true);
        },
      );
    } else {
      Toast.hide();
      this.getSignInInfo(false);
    }
  }

  // 获取页面信息
  async getSignInInfo(boo) {
    const res = await getSignInInfo();
    const isModal = boo;

    if (res && !res.msg) {
      this.setState({
        data: res,
        isShowSignModal: isModal,
      });
    } else {
      this.setState({
        isShowSignModal: isModal,
      });
    }
  }

  // 领取米粒
  getCoin = async type => {
    const myAudio = new Audio();
    myAudio.preload = true;
    myAudio.loop = false;
    myAudio.src = require('@assets/coin.mp3');

    const res = await getCoin(type);
    console.log('领取米粒---------', res);
    if (!res) {
      Toast.info('领取成功！');
      myAudio.play();
      this.getSignInInfo();
    }
  };

  // 获取未完成首购好友列表
  async getSignInFriends() {
    const res = await getSignInFriends();

    if (res && !res.msg) {
      this.setState({
        signInFriends: res,
      });
    }
  }

  // 获取新人0元购分享参数
  async getNewPeopleProduct() {
    const res = await getNewPeopleProduct(1);
    const datas = {
      pList: res,
      type: 'newPeopleCanvas',
      url: `${window.document.activeH5Url}/newPeopleShare`,
      tkl: `米粒生活温馨提示：\n您的免单商品还未领取，再不来就要被抢没啦！\n还包邮哦，千万别错过！\n-------------\n下载链接：https://www.vxiaoke360.com/H5/mlsh-download/index.html\n邀请码：`,
      shareTitle: '新人免单 真正0元购',
      shareDesc: `来米粒生活\n每天都是双十一`,
      isBackIntercept: false,
    };
    setTimeout(() => {
      window.postMessage(JSON.stringify(datas), '*');
    }, 200);
    if (res) {
      this.setState({
        newPeoplelist: res.zeroProducts,
      });
    }
  }

  // 获取1元购列表及分享参数
  async getOneYuanProduct() {
    const res = await getOneYuanProduct();
    const arr = [];
    let price = 10000;
    if (res && res.todayProducts.length) {
      res.todayProducts.forEach(item => {
        if (item.paymentPrice < price) {
          price = item.paymentPrice;
          this.imgUrl = item.productImg;
        }
      });
      arr.push(this.imgUrl || res.todayProducts[0].productImg);
      this.setState({
        pList: res,
        shareParams: arr,
      });
    }
  }

  render() {
    const {
      panelList,
      data,
      signInInfo,
      isShowFriends,
      isShowSignModal,
      signInFriends,
      isQuestionModal,
    } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.headWrap}>
          <img style={styles.headBg} src={require('@assets/SignIn/banner-bg.png')} alt="" />
          <div style={styles.headBox}>
            <div onClick={() => this.jumpPage('h5', 'signInDetail')} style={styles.coinListUrl}>
              米粒明细>
            </div>
            <div style={styles.coinCountWrap}>
              <div style={styles.coinCountBox}>
                <div style={styles.countTitleWrap}>
                  <img
                    style={styles.countIcon}
                    src={require('@assets/SignIn/icon-coin.png')}
                    alt=""
                  />
                  <div style={styles.countText}>我的米粒</div>
                </div>
                <div style={styles.countNum}>{data.totalGoldRiceNum || '0'}</div>
              </div>
              <div style={styles.coinCountBox}>
                <div style={styles.countTitleWrap}>
                  <img
                    style={styles.countIcon}
                    src={require('@assets/SignIn/icon-coin.png')}
                    alt=""
                  />
                  <div style={styles.countText}>今日获得</div>
                </div>
                <div style={styles.countNum}>{data.todayGoldRiceNum || '0'}</div>
              </div>
              <div style={styles.coinCountBox}>
                <div style={styles.countTitleWrap} onClick={() => this.handleQuestionModal(true)}>
                  <img
                    style={styles.countIcon}
                    src={require('@assets/SignIn/icon-coin.png')}
                    alt=""
                  />
                  <div style={styles.countText}>待发放</div>
                  <div style={styles.countSymbol}>?</div>
                </div>
                <div style={styles.countNum}>{data.pendingGoldRiceNum || '0'}</div>
              </div>
            </div>
            <SignInPanel data={data} panelList={panelList} />
          </div>
        </div>
        <div style={styles.infoWrap}>
          <div onClick={() => this.jumpPage('h5', 'lottery')} style={styles.bannerBox}>
            <img style={styles.banner} src={require('@assets/SignIn/banner.png')} />
            <div style={styles.bannerTextBox}>
              <div style={styles.bannerText}>50米粒，100%中奖</div>
            </div>
            <img
              className="bannerIcon"
              style={styles.bannerIcon}
              src={require('@assets/SignIn/icon-lottery.png')}
            />
          </div>
          <SignInOperation data={data} getCoin={this.getCoin} getOperation={this.getOperation} />
          <div onClick={() => this.jumpPage('h5', 'signInRule')} style={styles.ruleBtn}>
            了解米粒规则
          </div>
        </div>
        <FriendsItem
          list={signInFriends}
          isShowFriends={isShowFriends}
          closeFriendModal={this.closeFriendModal}
          answerFriends={this.answerFriends}
        />
        <SignInModal
          isShowSignModal={isShowSignModal}
          data={signInInfo}
          jumpPage={this.jumpPage}
          closeSignInModal={this.closeSignInModal}
        />
        <Modal
          visible={isQuestionModal}
          transparent
          className="questionModal"
          onClose={() => this.handleQuestionModal(false)}
          title="待发放米粒"
          footer={[{ text: '确认', onPress: () => this.handleQuestionModal(false) }]}
        >
          <div style={styles.questionModal}>
            好友完成首次购物、自己下单购物奖励的米粒，在确认收货后7天发放，具体请查看明细
          </div>
        </Modal>
      </div>
    );
  }
}
