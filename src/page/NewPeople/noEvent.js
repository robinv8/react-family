import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import ListItem from './components/ListItem';
import IsBuyModal from './components/IsBuyModal';
import IsBackModal from './components/IsBackModal';
import RuleModal from '../../components/NewPeople/RuleModal';
import {
  getNewPeopleProduct,
  getNewPeopleTime,
  checkVersion,
  getNewPeopleCheck,
} from '../../service/api';
import { splitTime, getQueryString } from '../../utils/tools';
import checkAuth from '../../utils/checkAuth';

const styles = {
  container: {
    width: '100%',
    backgroundImage: 'linear-gradient(0deg, #E8074E 12%, #E61055 100%)',
    paddingBottom: '80px',
  },
  loadingText: {
    width: '100%',
    lineHeight: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '14px',
    color: '#fff',
    fontFamily: 'PingFangSC-Regular',
  },
  bannerWrap: {
    width: '100%',
    height: '440px',
    position: 'relative',
    overflow: 'hidden',
  },
  banner: {
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  contentContainer: {
    paddingTop: '246px',
    paddingLeft: '12px',
    paddingRight: '12px',
    position: 'relative',
    zIndex: 9,
  },
  bannerBtnWrap: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  bannerBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(-90deg,#E042FC 0%, #9056FF  100%)',
    boxShadow: '0 4px 0 0 #B000E2, inset 0 0 6px 0 #D850FF',
    borderRadius: '37px',
    width: '48%',
    height: '44px',
  },
  bannerBtnText: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: '18px',
    color: '#fff',
    marginRight: '5px',
  },
  bannerBtnIcon: {
    width: '9px',
    height: 'auto',
    marginTop: '1px',
    display: 'block',
  },
  productContainer: {
    padding: '12px',
    marginTop: '-1px',
  },
  productWrap: {
    background: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    paddingTop: '22px',
    marginTop: '20px',
  },
  itemTitle: {
    position: 'absolute',
    left: 0,
    top: '-28px',
    zIndex: 99,
    width: '100%',
  },
  itemTitleImg: {
    width: '224px',
    height: '48px',
    margin: '0 auto',
    display: 'block',
  },
  proLabel: {
    position: 'absolute',
    left: 0,
    top: 0,
    lineHeight: '56px',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '16px',
    width: '100%',
  },
  roleWrap: {
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.15)',
    padding: '14px 12px 4px 12px',
  },
  roleTitleWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '14px',
  },
  roleTitleIcon: {
    width: '18px',
    height: 'auto',
  },
  roleTitle: {
    fontFamily: 'PingFangSC-Semibold',
    fontSize: '18px',
    color: '#fff',
    margin: '0 12px',
  },
  roleContent: {
    display: 'flex',
    marginBottom: '10px',
  },
  roleNum: {
    background: '#FFD061',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    marginRight: '8px',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '13px',
    color: '#F1004D',
    textAlign: 'center',
    lineHeight: '18px',
    marginTop: '2px',
  },
  roleText: {
    flex: 1,
    display: 'flex',
  },
  roleTextBold: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: '14px',
    color: '#fff',
  },
  roleTextNormal: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    color: '#fff',
    flex: 1,
  },
  topRuleWrap: {
    width: '67px',
    height: '28px',
    background: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '12px',
    right: '12px',
    zIndex: 10,
  },
  topRuleText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    color: '#fff',
  },
  bigBtn: {
    width: '100%',
    display: 'flex',
    height: '48px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '24px',
    background: '#FFD34D',
    boxShadow: '0 4px 0 0 #FD8D00',
    margin: '30px auto 10px',
  },
  bigText: {
    fontSize: '17px',
    fontFamily: 'PingFangSC-Medium',
    color: '#A74D00',
  },
  bigBtnImg: {
    width: '16px',
    height: '16px',
    marginLeft: '4px',
  },
  proListItem: {
    marginBottom: '40px',
    padding: '0 12px',
    position: 'relative',
  },
  shareBtnWrap: {
    padding: '0 20px',
    position: 'fixed',
    width: '100%',
    bottom: '20px',
    left: 0,
    boxSizing: 'border-box',
    zIndex: 9999,
  },
  shareBtn: {
    width: '100%',
    background: '#FFD34D',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '24px',
    boxShadow: '0 4px 0 0 #FD8D00, inset 0 0 4px 0 #FFD472',
  },
  shareBtnText: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: '16px',
    color: '#A74D00',
  },
  shareBtnImg: {
    width: '15px',
    height: '15px',
    marginLeft: '4px',
  },
  orderTipTitleWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '12px',
  },
  orderTipTitleIcon: {
    width: '52px',
    height: 'auto',
  },
  orderTipTitle: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: '16px',
    color: '#FFDB87',
    margin: '0 12px',
  },
  orderTipWrap: {
    width: '100%',
    borderRadius: '10px',
    background: '#FFDB87',
    padding: '12px 16px',
    boxSizing: 'border-box',
  },
  stepWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    alignItems: 'center',
  },
  stepTitle: {
    background: '#FFE9B6',
    border: '3px solid #FFB300',
    textAlign: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '13px',
    color: '#A74D00',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  stepTipBox: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '56px',
  },
  stepText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#A74D00',
    textAlign: 'center',
  },
  stepIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  stepLine: {
    width: '46px',
    height: '1px',
    background: '#FFB300',
  },
  stepArrow: {
    width: 0,
    height: 0,
    borderTop: '5px solid transparent',
    borderBottom: '5px solid transparent',
    borderLeft: '9px solid #FFB300',
  },
  stepDes: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#AA5305',
  },
  proTipWrap: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#333',
    lineHeight: '18px',
    padding: '10px',
  },
};
export default class NewPeopleIndex extends Component {
  beforeInterceptStatus = false;

  state = {
    list: [],
    recommendPro: [],
    loadMoreText: '',
    loadingState: {
      loading: '加载中...',
      noMoreData: '',
      failure: '好嗨哟，居然请求失败了 =.=!',
      emptyData: '暂无数据',
    },
    currentPage: 1,
    timeNum: 0,
    time: {
      hours: '00',
      minutes: '00',
      seconds: '00',
    },
    h5Url: [
      {
        url: 'CourseIndex',
        type: 2,
        title: '新手指引',
        id: 4776705892005504,
      },
      {
        url:
          'https://mp.weixin.qq.com/s?__biz=MzU4NzgwMTI4Ng==&mid=2247483830&idx=1&sn=1d12541b969e703fef841ef109613642&chksm=fde7361fca90bf09949d4230f64a57eb526e37606a60584b66b0fcd9a913a63a1d82d286e641&token=208534927&lang=zh_CN#rd',
        type: 1,
        title: '省钱攻略',
        id: '',
      },
    ],
    showOld: false,
    isBackModal: false,
    isShowRule: false,
    ruleText: [
      {
        title: '新人定义',
        text: '注册后48小时内在米粒生活未下单的用户。',
      },
      {
        title: '活动时间',
        text: '每日商品数量有限，抢完即止。',
      },
      {
        title: '活动方式',
        text: '领取优惠券-下单购买-补贴返款。',
      },
      {
        title: '返现时间',
        text: '淘宝商品确认收货后7天返现到钱包，可直接提现。',
      },
      {
        title: '退款退货',
        text: '如出现退款、退货，补贴的金额将被收回，并且失去免单资格。',
      },
      {
        title: '注意事项',
        text:
          '每个新人只能购买一单免单商品，限购买一件商品，若购买多件商品，仍按一件商品进行补贴。',
      },
    ],
    isCanJump: false,
  };

  componentDidMount() {
    const mobileType = navigator.userAgent;
    const isAndroid = mobileType.indexOf('Android') > -1 || mobileType.indexOf('Linux') > -1;
    const version = getQueryString('version');

    window.addEventListener('message', e => {
      const message = isAndroid ? e.data : JSON.parse(e.data);
      console.log('接收postmessage', message);
      if (message && Number(message.tbAuth) >= 0) {
        console.log('bridge建立成功！');
        message.version = version;
        this.checkAuthParams = message;
      }
    });

    this.setState({
      isCanJump: true,
    });
    this.hiddenAppModal();
    this.getVersion();
    const timer = setTimeout(() => {
      this.getTime();
    }, 2000);
    if (Number(version.split('.').join('')) >= 266) {
      if (isAndroid) {
        // 确保postmessage服务注册成功
        // window.addEventListener("message", e => {
        //   const message = e.data;
        //   if (message.loadFinish) {
        //     console.log("bridge建立成功！");
        //     this.getTime();
        //     clearTimeout(timer);
        //   }
        // });
        this.getTime();
        clearTimeout(timer);
      } else {
        window.addEventListener('message', e => {
          const message = JSON.parse(e.data);
          if (message.loadFinish) {
            this.getTime();
            clearTimeout(timer);
          }
        });
      }
    } else {
      this.getTime();
    }

    this.getList();
    this.isClickBack();
  }
  getMtaH5 = MtaH5 => {
    if (window.MtaH5) {
      window.MtaH5.clickStat(MtaH5);
    }
  };
  launchApp = () => {
    this.getMtaH5('scanpaysuccess_jump_launchapp');
    window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.vxiaoke.ricelife.app';
  };
  hiddenAppModal = () => {
    setTimeout(() => {
      if (window.postMessage) {
        const datas = {
          isVerifity: true,
          isHiddenFloatBtn: true,
          type: 2,
        };
        window.postMessage(JSON.stringify(datas), '*');
      } else {
        console.log('没有window.postMessage');
      }
    }, 200);
  };

  handleBuyModal = boo => {
    this.setState({
      showOld: boo,
    });
  };

  handleBackModal = boo => {
    this.setState({
      isBackModal: boo,
    });
  };

  isClickBack = () => {
    const mobileType = navigator.userAgent;
    const isAndroid = mobileType.indexOf('Android') > -1 || mobileType.indexOf('Linux') > -1;
    const version = getQueryString('version');

    if (isAndroid) {
      if (Number(version.split('.').join('')) >= 266) {
        window.addEventListener('message', e => {
          const { timeNum } = this.state;
          console.log('返回监听', e);
          const message = e.data;
          if (message && message.isBack && timeNum > 0) {
            this.handleBackModal(true);
          }
        });
        window.document.addEventListener('message', e => {
          const { timeNum } = this.state;
          console.log('返回监听', e);
          const message = JSON.parse(e.data);
          if (message && message.isBack && timeNum > 0) {
            this.handleBackModal(true);
          }
        });
      } else {
        window.document.addEventListener('message', e => {
          const { timeNum } = this.state;
          const message = JSON.parse(e.data);
          if (message && message.isBack && timeNum > 0) {
            this.handleBackModal(true);
          }
        });
      }
    } else {
      window.addEventListener('message', e => {
        const { timeNum } = this.state;
        console.log('返回监听', e, timeNum);
        const message = JSON.parse(e.data);
        if (message && message.isBack) {
          if (timeNum > 0) {
            this.handleBackModal(true);
          } else {
            this.backPage();
          }
        }
      });
    }
  };

  countDown = (timeNum = 0, isStop = false) => {
    clearInterval(this.timer);
    if (isStop) {
      return;
    }
    this.timer = setInterval(() => {
      // console.log('倒计时', timeNum);
      if (timeNum > 1000) {
        timeNum -= 1000;
        const time = splitTime(timeNum, 'HMS');
        this.setState({
          time,
          timeNum,
        });
      } else {
        this.setState({
          time: {
            hours: '00',
            minutes: '00',
            seconds: '00',
          },
          timeNum: 0,
        });
        this.isBackIntercept(false);
        this.beforeInterceptStatus = false;
      }
    }, 1000);
  };

  isBackIntercept = boo => {
    // 防止重复发送消息
    // if (boo === this.beforeInterceptStatus) {
    //   return;
    // }
    setTimeout(() => {
      if (window.postMessage) {
        const datas = {
          isBackIntercept: boo,
        };
        window.postMessage(JSON.stringify(datas), '*');
      } else {
        console.log('没有window.postMessage');
      }
    }, 800);
  };

  backPage = () => {
    const datas = {
      isVerifity: true,
      isPop: true,
    };
    console.log('残忍离开--------', datas);
    window.postMessage(JSON.stringify(datas));
  };

  jumpPage = item => {
    const params = {
      info: item,
      type: 'jumpPage',
    };
    window.postMessage(JSON.stringify(params));
  };

  // 下拉刷新
  onHeaderRefresh = () => {
    console.log('下拉刷新===onHeaderRefresh');
    this.canLoadMore = false;
    this.setState(
      {
        currentPage: 1,
        list: [],
      },
      () => {
        this.getList();
      },
    );
  };

  // 上拉加载
  onFooterLoad = () => {
    console.log('上拉加载===onFooterLoad');
    this.getList();
  };

  async getVersion() {
    const res = await checkVersion();
    if (res && res.msg) {
      this.setState({
        tip: res.msg,
      });
    }
  }

  toDetail = async item => {
    if (this.checkAuthParams) {
      const res = await checkAuth(this.checkAuthParams);
      if (!res) {
        console.log('需要授权');
        return;
      } else {
        console.log('不需要授权');
      }
    }
    await this.getTime();
    const { isCanJump } = this.state;
    if (this.isOld) {
      this.handleBuyModal(true);
      return;
    }

    if (Number(item.percent) === 100) {
      Toast.info('已抢完，明天再来哦');
      return;
    }
    let params = {};
    if (isCanJump) {
      this.setState({
        isCanJump: false,
      });
      Toast.loading('跳转中...', 0);
      if (item.productType === 0) {
        params = {
          id: item.id,
          type: 'newPeopleToTb',
        };
        Toast.hide();
        window.postMessage(JSON.stringify(params));
        console.log('跳转发送postMessage', params);
      } else {
        params = {
          isVerifity: true,
          isJump: true,
          jumpInfo: {
            isAuth: true,
            routeName: 'NewPeopleConfirm',
            params: {
              id: item.id,
              skuId: '',
              productNumber: 1,
            },
          },
        };
        this.getNewPeopleCheck(params, item.id);
      }
      setTimeout(() => {
        this.setState({
          isCanJump: true,
        });
      }, 2000);
    }
  };

  handleRule = boo => {
    this.setState({
      isShowRule: boo,
    });
  };

  async getNewPeopleCheck(params, id) {
    const res = await getNewPeopleCheck(id);
    console.log('进入', res);
    Toast.hide();
    if (res instanceof Object) {
      Toast.show(res.msg);
    } else {
      console.log('零元购跳转门店商品确认订单监听', params);
      window.postMessage(JSON.stringify(params));
    }
  }

  async getList() {
    const { loadingState, list } = this.state;
    let loadMoreText = loadingState.loading;
    this.setState({ loadMoreText });

    let { currentPage } = this.state;
    const res = await getNewPeopleProduct(currentPage);
    const datas = {
      pList: res,
      type: 'newPeopleCanvas',
      url: `${window.document.activeH5Url}/newPeopleShare`,
      tkl: `米粒生活温馨提示：\n您的免单商品还未领取，再不来就要被抢没啦！\n还包邮哦，千万别错过！\n-------------\n下载链接：https://www.vxiaoke360.com/H5/mlsh-download/index.html\n邀请码：`,
      shareTitle: '新人免单 真正0元购',
      shareDesc: `来米粒生活\n每天都是双十一`,
      isBackIntercept: this.beforeInterceptStatus,
    };
    setTimeout(() => {
      window.postMessage(JSON.stringify(datas), '*');
    }, 200);
    if (res) {
      currentPage++;
      loadMoreText = '';
      this.canLoadMore = true;
      this.setState({
        list: [...list, ...res.zeroProducts],
        recommendPro: res.tipProducts || [],
        currentPage,
      });
    } else {
      if (list.length > 0) {
        loadMoreText = loadingState.noMoreData;
      } else {
        loadMoreText = loadingState.emptyData;
      }
      this.canLoadMore = false;
    }
    this.setState({
      loadMoreText,
    });
  }

  getTime = async () => {
    this.isOld = false;
    const res = await getNewPeopleTime();
    if (res && res.lastExpireTime) {
      this.timeNum = res.lastExpireTime * 1000;
      if (this.timeNum > 1000) {
        this.countDown(this.timeNum);
      } else {
        this.countDown(0, true);
      }
      this.setState({
        timeNum: this.timeNum,
      });
      this.isBackIntercept(true);
      this.beforeInterceptStatus = true;
    } else {
      this.isOld = true;
      this.isBackIntercept(false);
      this.beforeInterceptStatus = false;
    }
  };

  loadingText = () => {
    const { loadMoreText } = this.state;
    return <div style={styles.loadingText}>{loadMoreText}</div>;
  };

  pressShare = async e => {
    const { list } = this.state;
    if (this.checkAuthParams) {
      const res = await checkAuth(this.checkAuthParams);
      if (!res) {
        console.log('需要授权');
        return;
      } else {
        console.log('不需要授权');
      }
    }

    const params = {
      pList: list[0].productList,
      type: 'newPeopleCanvas',
      url: `${window.document.activeH5Url}/newPeopleShare`,
      tkl: `米粒生活温馨提示：\n您的免单商品还未领取，再不来就要被抢没啦！\n还包邮哦，千万别错过！\n-------------\n下载链接：https://www.vxiaoke360.com/H5/mlsh-download/index.html\n邀请码：`,
      showShare: true,
      shareTitle: '新人免单 真正0元购',
      shareDesc: `来米粒生活\n每天都是双十一`,
      isBackIntercept: this.beforeInterceptStatus,
    };

    if (window.MtaH5) {
      window.MtaH5.clickStat('new_people_zero_buy_bottom');
    }
    if (e) {
      this.handleBuyModal(false);
    }
    setTimeout(() => {
      window.postMessage(JSON.stringify(params));
      console.log('发送postMessage', params);
    }, 200);
  };

  renderProduct = () => {
    const { list } = this.state;
    if (list.length > 0) {
      return list
        .filter(item => item.productList && item.productList.length)
        .map((item, index) => {
          return (
            <div style={styles.proListItem} key={index}>
              <div style={styles.itemTitle}>
                <img
                  style={styles.itemTitleImg}
                  src={require('@assets/NewPeople/item-title.png')}
                  alt=""
                />
                <div style={styles.proLabel}>{item.title}</div>
              </div>
              <div style={styles.productWrap}>
                {item.id === '999' && (
                  <div style={styles.proTipWrap}>
                    <div>1. 门店商品补贴金额为直接扣减</div>
                    <div>2. 商品如有返利，按实际支付金额计算</div>
                  </div>
                )}
                <ListItem list={item.productList} toDetail={() => {}} isStore={item.id === '999'} />
              </div>
            </div>
          );
        });
    }
  };

  renderRule = () => {
    const { ruleText } = this.state;
    return ruleText.map((item, index) => {
      return (
        <div key={index} style={styles.roleContent}>
          <div style={styles.roleNum}>{index + 1}</div>
          <div style={styles.roleText}>
            <span style={styles.roleTextBold}>{item.title}：</span>
            <span style={styles.roleTextNormal}>{item.text}</span>
          </div>
        </div>
      );
    });
  };

  render() {
    const { time, timeNum, showOld, recommendPro, isBackModal, isShowRule, ruleText } = this.state;
    return (
      <div style={styles.container} onClick={this.launchApp}>
        <div style={styles.bannerWrap}>
          <div style={styles.topRuleWrap} onClick={() => this.handleRule(true)}>
            <span style={styles.topRuleText}>规则</span>
          </div>
          <img src={require('@assets/NewPeople/banner.png')} style={styles.banner} alt="" />
          <div style={styles.contentContainer}>
            {/*
            <div style={styles.bannerBtnWrap}>
              <div
                style={styles.bannerBtn}
                onClick={() => this.jumpPage(h5Url[0])}
              >
                <div style={styles.bannerBtnText}>新手指引</div>
                <img
                  src={require("@assets/NewPeople/icon-arrow.png")}
                  style={styles.bannerBtnIcon}
                  alt=""
                />
              </div>
              <div
                style={styles.bannerBtn}
                onClick={() => this.jumpPage(h5Url[1])}
              >
                <div style={styles.bannerBtnText}>省钱攻略</div>
                <img
                  src={require("@assets/NewPeople/icon-arrow.png")}
                  style={styles.bannerBtnIcon}
                  alt=""
                />
              </div>
            </div>
            */}
            <div style={styles.orderTipTitleWrap}>
              <img
                style={styles.orderTipTitleIcon}
                src={require('@assets/NewPeople/icon-titleLeft.png')}
                alt=""
              />
              <div style={styles.orderTipTitle}>只需三步 轻松享免单</div>
              <img
                style={styles.orderTipTitleIcon}
                src={require('@assets/NewPeople/icon-titleRight.png')}
                alt=""
              />
            </div>
            <div style={styles.orderTipWrap}>
              <div style={styles.stepWrap}>
                <div style={styles.stepTitle}>
                  <div>购买</div>
                  <div>商品</div>
                </div>
                <div style={styles.stepTipBox}>
                  <div style={styles.stepText}>
                    <div>下单</div>
                    <div>成功</div>
                  </div>
                  <div style={styles.stepIcon}>
                    <div style={styles.stepLine} />
                    <div style={styles.stepArrow} />
                  </div>
                </div>
                <div style={styles.stepTitle}>
                  <div>获得</div>
                  <div>返利</div>
                </div>
                <div style={styles.stepTipBox}>
                  <div style={styles.stepText}>
                    <div>确认收货</div>
                    <div>7天后</div>
                  </div>
                  <div style={styles.stepIcon}>
                    <div style={styles.stepLine} />
                    <div style={styles.stepArrow} />
                  </div>
                </div>
                <div style={styles.stepTitle}>
                  <div>提现金</div>
                </div>
              </div>
              <div style={styles.stepDes}>
                <div>1、如商品有优惠券，请领券购买</div>
                <div>2、如无优惠券，点击商品名称直接购买</div>
                <div>3、如实付金额＞补贴金额，仍按补贴金额发放</div>
                <div>4、勿使用除优惠券外影响实付款的抵扣，如红包，淘金币等。</div>
              </div>
            </div>
          </div>
        </div>
        {this.renderProduct()}
        <div style={styles.shareBtnWrap}>
          <div style={styles.shareBtn} onClick={this.launchApp}>
            <span style={styles.shareBtnText}>我要0元领商品</span>
          </div>
        </div>
        <div style={styles.productContainer}>
          <div style={styles.roleWrap}>
            <div style={styles.roleTitleWrap}>
              <img
                style={styles.roleTitleIcon}
                src={require('@assets/NewPeople/role-title-Left.png')}
                alt=""
              />
              <div style={styles.roleTitle}>活动规则</div>
              <img
                style={styles.roleTitleIcon}
                src={require('@assets/NewPeople/role-title-Left.png')}
                alt=""
              />
            </div>
            <div>{this.renderRule()}</div>
          </div>
        </div>
        {showOld && (
          <IsBuyModal pressShare={this.pressShare} handleBuyModal={this.handleBuyModal} />
        )}
        {isBackModal && (
          <IsBackModal
            timeNum={timeNum}
            time={time}
            recommendPro={recommendPro}
            toDetail={this.toDetail}
            handleBackModal={this.handleBackModal}
            backPage={this.backPage}
          />
        )}
        {isShowRule && <RuleModal ruleText={ruleText} handleRule={this.handleRule} />}
      </div>
    );
  }
}
