import React, { Component } from 'react';
import ListItem from './components/ListItem';
import { getNewPeopleProduct } from '../../service/api';

const styles = {
  container: {
    width: '100%',
    backgroundImage: 'linear-gradient(0deg, #E8074E 12%, #E61055 100%)',
    paddingBottom: '80px',
  },
  tipWrap: {
    width: '100%',
    textAlign: 'center',
    position: 'fixed',
    top: '40%',
    left: 0,
    zIndex: 9999,
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  tipBox: {
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    margin: '0 auto',
    borderRadius: '6px',
    padding: '10px 18px',
    display: 'inline-block',
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
    paddingTop: '210px',
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
    top: '42px',
    right: '10px',
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
  fixedheder: {
    width: '100%',
    height: 'auto',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 99,
  },
  proTipWrap: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#333',
    lineHeight: '18px',
    padding: '10px',
  },
};
export default class NewPeopleShare extends Component {
  state = {
    list: [],
    loadMoreText: '',
    loadingState: {
      loading: '加载中...',
      noMoreData: '',
      failure: '好嗨哟，居然请求失败了 =.=!',
      emptyData: '暂无数据',
    },
    currentPage: 1,
    isShowTip: false,
    tip: '',
  };

  componentDidMount() {
    this.getList();

    const u = navigator.userAgent;
    const app = navigator.appVersion;
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // android终端或者uc浏览器
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
    console.log('Android', isAndroid);
    console.log('iOS', isiOS);
    this.isiOS = isiOS;
    if (isiOS) {
      this.schemeUrl = 'mili://';
    } else {
      this.schemeUrl = 'mili://m.vxiaoke360.com';
    }
  }

  toDetail = () => {
    this.jumpToApp();
  };

  jumpToApp() {
    function openApp(callback) {
      // 检查app是否打开
      function checkOpen(cb) {
        const _clickTime = +new Date();
        function check(elsTime) {
          if (elsTime > 3000 || document.hidden || document.webkitHidden) {
            cb(1);
          } else {
            cb(0);
          }
        }
        // 启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
        let _count = 0;
        let intHandle;
        intHandle = setInterval(function() {
          _count++;
          const elsTime = +new Date() - _clickTime;
          if (_count >= 100 || elsTime > 3000) {
            clearInterval(intHandle);
            check(elsTime);
          }
        }, 20);
      }
      // 在iframe 中打开APP
      const ifr = document.createElement('iframe');
      ifr.src = this.schemeUrl;
      ifr.style.display = 'none';
      if (callback) {
        checkOpen(function(opened) {
          callback && callback(opened);
        });
      }
      document.body.appendChild(ifr);
      setTimeout(function() {
        document.body.removeChild(ifr);
      }, 2000);
    }
    function isWeiXin() {
      const ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
      }
      return false;
    }
    if (this.isiOS) {
      setTimeout(function() {
        window.location.href = 'mili://';
      }, 200);
      setTimeout(function() {
        window.location.href = 'https://www.vxiaoke360.com/H5/mlsh-download/index.html';
      }, 1200);
      setTimeout(function() {
        window.location.reload();
      }, 2000);
    } else {
      if (isWeiXin()) {
        setTimeout(function() {
          window.location.href = 'https://www.vxiaoke360.com/H5/mlsh-download/index.html'; // 应用宝链接
        }, 200);
      } else {
        setTimeout(function() {
          window.location.href = 'mili://m.vxiaoke360.com';
        }, 200);
      }
      setTimeout(function() {
        window.location.href = `https://www.vxiaoke360.com/H5/mlsh-download/index.html?t=${10000 *
          Math.random()}`;
      }, 2000);
    }
  }

  async getList() {
    const { loadingState, list } = this.state;
    let loadMoreText = loadingState.loading;
    this.setState({ loadMoreText });

    let { currentPage } = this.state;
    const res = await getNewPeopleProduct(currentPage);
    if (res) {
      currentPage++;
      loadMoreText = '';
      this.setState({
        list: [...list, ...res.zeroProducts],
        currentPage,
      });
    } else if (list.length > 0) {
      loadMoreText = loadingState.noMoreData;
    } else {
      loadMoreText = loadingState.emptyData;
    }
    this.setState({
      loadMoreText,
    });
  }

  renderProduct = () => {
    const { list } = this.state;
    if (list.length > 0) {
      return list
        .filter(item => item.productList && item.productList.length > 0)
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
                <ListItem
                  list={item.productList}
                  toDetail={this.toDetail}
                  isStore={item.id === '999'}
                />
              </div>
            </div>
          );
        });
    }
  };

  render() {
    const { isShowTip, tip } = this.state;
    return (
      <div style={styles.container}>
        <img
          style={styles.fixedheder}
          src="https://image.vxiaoke360.com/openApp.png"
          alt=""
          onClick={() => this.jumpToApp()}
        />
        <div style={styles.bannerWrap}>
          <div style={styles.shareWrap} onClick={() => this.jumpToApp()}>
            <img
              style={styles.shareImg}
              src={require('@assets/NewPeople/share-white.png')}
              alt=""
            />
            <span style={styles.shareText}>分享</span>
          </div>
          <img src={require('@assets/NewPeople/banner.png')} style={styles.banner} alt="" />
          <div style={styles.contentContainer}>
            {/*
            <div style={styles.bannerBtnWrap}>
              <div style={styles.bannerBtn} onClick={() => this.jumpToApp()}>
                <div style={styles.bannerBtnText}>新手指引</div>
                <img src={require('./assets/icon-arrow.png')} style={styles.bannerBtnIcon} alt="" />
              </div>
              <div style={styles.bannerBtn} onClick={() => this.jumpToApp()}>
                <div style={styles.bannerBtnText}>省钱攻略</div>
                <img src={require('./assets/icon-arrow.png')} style={styles.bannerBtnIcon} alt="" />
              </div>
            </div>
            */}
            <div style={styles.orderTipTitleWrap}>
              <img
                style={styles.orderTipTitleIcon}
                src={require('@assets/NewPeople/icon-titleLeft.png')}
                alt=""
              />
              <div style={styles.orderTipTitle}>只需两步 轻松享免单</div>
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
              </div>
            </div>
          </div>
        </div>
        {this.renderProduct()}
        <div style={styles.shareBtnWrap}>
          <div style={styles.shareBtn} onClick={() => this.jumpToApp()}>
            <span style={styles.shareBtnText}>分享0元好物给好友</span>
            <img
              style={styles.shareBtnImg}
              src={require('@assets/NewPeople/share-zong.png')}
              alt=""
            />
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
            <div>
              <div style={styles.roleContent}>
                <div style={styles.roleNum}>1</div>
                <div style={styles.roleText}>
                  <span style={styles.roleTextBold}>新人定义：</span>
                  <span style={styles.roleTextNormal}>注册后48小时内在米粒生活未下单的用户。</span>
                </div>
              </div>
              <div style={styles.roleContent}>
                <div style={styles.roleNum}>2</div>
                <div style={styles.roleText}>
                  <span style={styles.roleTextBold}>活动时间：</span>
                  <span style={styles.roleTextNormal}>每日商品数量有限，抢完即止。</span>
                </div>
              </div>
              <div style={styles.roleContent}>
                <div style={styles.roleNum}>3</div>
                <div style={styles.roleText}>
                  <span style={styles.roleTextBold}>活动方式：</span>
                  <span style={styles.roleTextNormal}>领取优惠券-下单购买-补贴返款。</span>
                </div>
              </div>
              <div style={styles.roleContent}>
                <div style={styles.roleNum}>4</div>
                <div style={styles.roleText}>
                  <span style={styles.roleTextBold}>返现时间：</span>
                  <span style={styles.roleTextNormal}>
                    淘宝商品确认收货后7天返现到钱包，可直接提现。
                  </span>
                </div>
              </div>
              <div style={styles.roleContent}>
                <div style={styles.roleNum}>5</div>
                <div style={styles.roleText}>
                  <span style={styles.roleTextBold}>退款退货：</span>
                  <span style={styles.roleTextNormal}>
                    如出现退款、退货，补贴的金额将被收回，并且失去免单资格。
                  </span>
                </div>
              </div>
              <div style={styles.roleContent}>
                <div style={styles.roleNum}>6</div>
                <div style={styles.roleText}>
                  <span style={styles.roleTextBold}>注意事项：</span>
                  <span style={styles.roleTextNormal}>
                    每个新人只能购买一单免单商品，限购买一件商品，若购买多件商品，仍按一件商品进行补贴。
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isShowTip && (
          <div style={styles.tipWrap}>
            <div style={styles.tipBox}>{tip}</div>
          </div>
        )}
      </div>
    );
  }
}
