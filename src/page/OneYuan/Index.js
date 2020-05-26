import React from 'react';
import { Toast } from 'antd-mobile';
import { getOneYuanProduct, getOneYuanProductUrl } from '../../service/api';
import OneYuanItem from '../../components/OneYuan/OneYuanItem';
import checkAuth from '../../utils/checkAuth';
import { getQueryString } from '../../utils/tools';

const styles = {
  container: {
    background: 'linear-gradient(146deg,rgba(230,170,137,1) 0%,rgba(254,113,99,1) 99%)',
    width: '100%',
    minHeight: '100%',
  },
  head: {
    position: 'relative',
    width: '100%',
  },
  headImg: {
    width: '100%',
  },
  headText: {
    position: 'absolute',
    top: '10px',
    right: 0,
    width: '50px',
    height: '50px',
  },
  bgcolor: {
    background: 'linear-gradient(146deg,rgba(230,170,137,1) 0%,rgba(254,113,99,1) 99%)',
    paddingBottom: '100px',
    position: 'relative',
    top: '-2px',
  },
  tabWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabItem: {
    width: '50%',
    height: '44px',
    fontSize: '16px',
    fontWeight: '400',
    color: '#fff',
    lineHeight: '44px',
    background: '#FA7153',
    textAlign: 'center',
  },
  listWrap: {
    padding: 0,
  },
  btnWrap: {
    width: '100%',
    margin: '26px auto 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    left: 0,
    bottom: '20px',
  },
  btnBox: {
    width: '92%',
    height: '50px',
    margin: '0 auto',
    background: 'linear-gradient(0deg,rgba(253,225,11,1) 0%,rgba(255,243,87,1) 100%)',
    borderRadius: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxShadow: '0 3px 6px 0 rgba(177,94,1,0.50)',
  },
  shareIcon: {
    width: '16px',
    height: '16px',
    marginLeft: '8px',
  },
  shareText: {
    fontSize: '16px',
    fontFamily: 'PingFangSC-Medium',
    fontWeight: '500',
    color: '#84160A',
  },
  fixedWrap: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
  },
  toastWrap: {
    width: '280px',
    margin: '150px auto 0',
    position: 'relative',
  },
  toastImg: {
    width: '100%',
  },
  title: {
    position: 'absolute',
    top: '42px',
    left: '0',
    width: '100%',
    fontSize: '14px',
    fontFamily: 'PingFangSC-Medium',
    fontWeight: '500',
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',
  },
  ruleCon: {
    padding: '20px 17px 30px',
    background: '#fff',
    borderRadius: '0 0 10px 10px',
  },
  ruleItem: {
    display: 'flex',
  },
  ruleItemWrap: {
    width: '18px',
    height: '22px',
    marginRight: '4px',
    position: 'relative',
    paddingTop: '2px',
  },
  ruleItemImg: {
    width: '100%',
  },
  ruleItemNum: {
    width: '100%',
    height: '12px',
    position: 'absolute',
    top: '2px',
    left: 0,
    fontSize: '11px',
    fontFamily: 'PingFangSC-Regular',
    fontWeight: '400',
    color: 'rgba(255,255,255,1)',
    lineHeight: '12px',
    textAlign: 'center',
  },
  ruleItemText: {
    flex: 1,
    fontSize: '12px',
    fontFamily: 'PingFangSC-Regular',
    fontWeight: '400',
    color: '#333',
    lineHeight: '18px',
  },
  close: {
    width: '32px',
    height: '32px',
    margin: '14px auto 0',
  },
  tostWrap: {
    width: '280px',
    height: '400px',
    position: 'relative',
    margin: '180px auto 0',
  },
  tostWords: {
    width: '100%',
    position: 'absolute',
    top: '33px',
    left: 0,
  },
  words1: {
    width: '100%',
    fontSize: '18px',
    fontFamily: 'PingFangSC-Regular',
    fontWeight: '400',
    color: '#fff',
    lineHeight: '26px',
    textAlign: 'center',
  },
  words2: {
    paddingLeft: '3px',
  },
  confirm: {
    width: '80px',
    height: '40px',
    position: 'absolute',
    top: '115px',
    left: 0,
    right: 0,
    margin: 'auto',
    fontSize: '14px',
    fontFamily: 'PingFangSC-Regular',
    fontWeight: '400',
    color: 'rgba(171,69,1,1)',
    lineHeight: '40px',
    textAlign: 'center',
    background: 'linear-gradient(0deg,rgba(255,204,0,1) 0%,rgba(255,225,131,1) 100%)',
    borderRadius: '20px',
  },
  emptyWrap: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30px',
  },
  emptyImg: {
    width: '150px',
    height: '150px',
  },
  emptyText: {
    fontSize: '14px',
    color: '#fff',
    lineHeight: '22px',
    marginTop: '8px',
  },
};
export default class CardDetail extends React.Component {
  state = {
    tabIndex: 0,
    pList: [],
    list: [],
    showRule: false,
    showToast: false,
    toastWords: '',
    shareParams: [],
    showShare: false,
  };

  componentDidMount() {
    Toast.info('加载中...', 10000);
    this.wHeight = window.innerHeight;
    this.inviteCode = JSON.parse(localStorage.getItem('inviteCode'));
    this.canDo = true;
    const version = getQueryString('version');
    const mobileType = navigator.userAgent;
    const isAndroid = mobileType.indexOf('Android') > -1 || mobileType.indexOf('Linux') > -1;
    const { match } = this.props;
    window.addEventListener('message', e => {
      const message = isAndroid ? e.data : JSON.parse(e.data);
      console.log('接收postmessage', message);
      Toast.hide();
      this.setState({
        showShare: true,
      });
      if (message && Number(message.tbAuth) >= 0) {
        console.log('bridge建立成功！');
        message.version = version;
        this.checkAuthParams = message;
      }
    });

    const tab = match.params.tabIndex || 0;
    this.setState({
      tabIndex: Number(tab),
    });
    this.getList(Number(tab));
  }

  cliclTab = e => {
    const { pList } = this.state;
    const { todayProducts = [], tomorrowProducts = [] } = pList;
    const arr = e === 0 ? todayProducts : tomorrowProducts;
    this.setState({
      tabIndex: e,
      list: arr,
    });
  };

  jumpPage = async item => {
    if (this.checkAuthParams) {
      const auth = await checkAuth(this.checkAuthParams);
      if (!auth) {
        console.log('需要授权');
        return;
      }
      console.log('不需要授权');
    }

    const { tabIndex } = this.state;
    if (tabIndex === 1) {
      this.setState({
        showToast: true,
        toastWords: '活动还没开始，',
      });
      return;
    }
    if (item.status === 1) {
      this.setState({
        showToast: true,
        toastWords: `商品已经抢完，`,
      });
      return;
    }
    const res = await getOneYuanProductUrl(item.id);
    console.log('8888', res);
    if (res) {
      const datas = {
        isVerifity: true,
        isJump: true,
        jumpInfo: {
          isAuth: true,
          type: 'TB',
          url: res,
        },
      };
      setTimeout(() => {
        console.log('postMessage', datas);
        window.postMessage(JSON.stringify(datas));
      }, 100);
    } else {
      // Toast.show(res.msg)
    }
  };

  ruleState = () => {
    const { showRule } = this.state;
    this.setState({
      showRule: !showRule,
    });
  };

  toastState = () => {
    const { showToast } = this.state;
    this.setState({
      showToast: !showToast,
      toastWords: '活动还没开始，',
    });
  };

  openShare = async () => {
    if (this.checkAuthParams) {
      const auth = await checkAuth(this.checkAuthParams);
      if (!auth) {
        console.log('需要授权');
        return;
      }
      console.log('不需要授权');
    }
    const { pList, shareParams } = this.state;
    if (pList.todayProducts.length) {
      if (this.canDo) {
        this.canDo = false;
        setTimeout(() => {
          this.canDo = true;
        }, 1500);
        const params = {
          isVerifity: true,
          isShare: true,
          isHiddenFloatBtn: true,
          type: 0,
          shareInfo: {
            url: `${window.document.activeH5Url}/oneYuanShare/0`,
            shareTkl: `米粒生活独家福利：\n1元商品，每天不限量，疯抢中！\n还包邮哦，千万别错过\n-------------\n下载链接：https://www.vxiaoke360.com/H5/mlsh-download/index.html\n邀请码：${this.inviteCode}`,
            shareTitle: '1元抢购，每天不限量',
            shareDesc: `来米粒生活\n每天都是双十一`,
            isShowCopyText: false,
            isShowCopyLink: true,
            isShowSaveImg: true,
            shareKey: 'rn_getSnapupShareViewWithImgUrl',
            shareText: `${window.document.activeH5Url}/oneYuanShare/0`,
            shareParams: shareParams,
          },
        };

        setTimeout(() => {
          window.postMessage(JSON.stringify(params), '*');
        }, 100);
      }
    } else {
      Toast.info('商品列表为空');
    }
  };

  async getList(tab) {
    const res = await getOneYuanProduct();
    // console.log('999', res)
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
      // console.log('999', arr, this.imgUrl)
      this.setState({
        pList: res,
        list: tab === 0 ? res.todayProducts : res.tomorrowProducts,
        shareParams: arr,
      });
    } else {
      this.setState({
        showEmpty: true,
      });
    }
  }

  emptyState = () => {
    return (
      <div className="emptyWrap">
        <img style={styles.emptyImg} src={require('@assets/empty.png')} alt="" />
        <div style={styles.emptyText}>空空如也</div>
      </div>
    );
  };

  render() {
    const { list, tabIndex, showRule, showToast, toastWords, showShare } = this.state;
    return (
      <div style={{ ...styles.container, minHeight: `${this.wHeight}px` }}>
        <div style={styles.head}>
          <img style={styles.headImg} src={require('@assets/OneYuan/oneYuan-head.png')} alt="" />
          <div style={styles.headText} onClick={this.ruleState} />
        </div>
        <div style={styles.bgcolor}>
          <div style={styles.tabWrap}>
            <div
              style={{ ...styles.tabItem, background: tabIndex === 0 ? '#FA5732' : '#FA7153' }}
              onClick={() => this.cliclTab(0)}
            >
              今日热卖
            </div>
            <div
              style={{ ...styles.tabItem, background: tabIndex === 1 ? '#FA5732' : '#FA7153' }}
              onClick={() => this.cliclTab(1)}
            >
              明日预告
            </div>
          </div>

          <div style={styles.listWrap}>
            <OneYuanItem list={list} jumpPage={this.jumpPage} tabIndex={tabIndex} />
          </div>

          {/* { showEmpty && this.emptyState()} */}
          {showShare && (
            <div style={styles.btnWrap}>
              <div style={styles.btnBox} onClick={this.openShare}>
                <span style={styles.shareText}>分享1元好物给好友</span>
                <img
                  style={styles.shareIcon}
                  src={require('@assets/OneYuan/oneYuan-share.png')}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>

        {showRule ? (
          <div style={styles.fixedWrap}>
            <div style={styles.toastWrap}>
              <img
                style={styles.toastImg}
                src={require('@assets/OneYuan/oneYuan-rule.png')}
                alt=""
              />
              <div style={styles.title}>活动规则</div>
              <div style={styles.ruleCon}>
                <div style={styles.ruleItem}>
                  <div style={styles.ruleItemWrap}>
                    <img
                      style={styles.ruleItemImg}
                      src={require('@assets/OneYuan/oneYuan-sort.png')}
                      alt=""
                    />
                    <span style={styles.ruleItemNum}>1</span>
                  </div>
                  <span style={styles.ruleItemText}>
                    红包只能领取一次，领取该商品红包后请尽快使用，若因为商品被抢完仍未使用红包的，则该红包失效，不可再次领取其他商品红包
                  </span>
                </div>

                <div style={styles.ruleItem}>
                  <div style={styles.ruleItemWrap}>
                    <img
                      style={styles.ruleItemImg}
                      src={require('@assets/OneYuan/oneYuan-sort.png')}
                      alt=""
                    />
                    <span style={styles.ruleItemNum}>2</span>
                  </div>
                  <span style={styles.ruleItemText}>红包的有效期是自领取开始到当天的24点</span>
                </div>
                <div style={styles.ruleItem}>
                  <div style={styles.ruleItemWrap}>
                    <img
                      style={styles.ruleItemImg}
                      src={require('@assets/OneYuan/oneYuan-sort.png')}
                      alt=""
                    />
                    <span style={styles.ruleItemNum}>3</span>
                  </div>
                  <span style={styles.ruleItemText}>
                    红包仅限指定商品使用，红包下单直减，在米粒上无销售订单，无返佣，无店主红包
                  </span>
                </div>
                <div style={styles.ruleItem}>
                  <div style={styles.ruleItemWrap}>
                    <img
                      style={styles.ruleItemImg}
                      src={require('@assets/OneYuan/oneYuan-sort.png')}
                      alt=""
                    />
                    <span style={styles.ruleItemNum}>4</span>
                  </div>
                  <span style={styles.ruleItemText}>
                    领取的红包可在【手机淘宝】-我的淘宝-红包卡券查询
                  </span>
                </div>
                <div style={styles.ruleItem}>
                  <div style={styles.ruleItemWrap}>
                    <img
                      style={styles.ruleItemImg}
                      src={require('@assets/OneYuan/oneYuan-sort.png')}
                      alt=""
                    />
                    <span style={styles.ruleItemNum}>5</span>
                  </div>
                  <span style={styles.ruleItemText}>
                    部分活动商品青海，甘肃，宁夏，内蒙，新疆，西藏等偏远地区不包邮
                  </span>
                </div>
              </div>

              <img
                style={styles.close}
                src={require('@assets/icon-close.png')}
                alt=""
                onClick={this.ruleState}
              />
            </div>
          </div>
        ) : null}

        {showToast ? (
          <div style={styles.fixedWrap}>
            <div style={styles.toastWrap}>
              <img
                style={styles.toastImg}
                src={require('@assets/OneYuan/oneYuan-toast.png')}
                alt=""
              />
              <div style={styles.tostWords}>
                <div style={{ ...styles.words1, ...styles.words2 }}> {toastWords}</div>
                <div style={styles.words1}>明天再来哦~</div>
              </div>
              <div style={styles.confirm} onClick={this.toastState}>
                好的
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
