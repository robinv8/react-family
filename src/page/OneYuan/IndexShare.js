import React from 'react';
import { getOneYuanProduct } from '../../service/api';
import OneYuanItem from '../../components/OneYuan/OneYuanItem';

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
  };

  componentDidMount() {
    this.wHeight = window.innerHeight;
    this.inviteCode = JSON.parse(localStorage.getItem('inviteCode'));
    this.canDo = true;
    const { match } = this.props;
    const tab = match.params.tabIndex || 0;
    this.setState({
      tabIndex: Number(tab),
    });
    this.getList(Number(tab));
  }

  cliclTab = e => {
    const {
      pList: { todayProducts = [], tomorrowProducts = [] },
    } = this.state;
    const arr = e === 0 ? todayProducts : tomorrowProducts;
    this.setState({
      tabIndex: e,
      list: arr,
    });
  };

  jumpPage = async () => {
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
    const { list, tabIndex, showRule, showToast, toastWords } = this.state;
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

          <div style={styles.btnWrap}>
            <div style={styles.btnBox} onClick={this.jumpPage}>
              <span style={styles.shareText}>分享1元好物给好友</span>
              <img
                style={styles.shareIcon}
                src={require('@assets/OneYuan/oneYuan-share.png')}
                alt=""
              />
            </div>
          </div>
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
