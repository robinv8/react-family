import React, { Component } from 'react';
import ReactPullLoad, { STATS } from 'react-pullload';
import 'react-pullload/dist/ReactPullLoad.css';
import RedEnvelopesItem from '../../components/RedEnvelopes/RedEnvelopesItem';
import InviteItem from '../../components/RedEnvelopes/InviteItem';
import BagItem from '../../components/RedEnvelopes/BagItem';
import Barrage from '../../components/RedEnvelopes/Barrage';
import {
  redEnvelopesList,
  getList,
  openRedEnvelopes,
  redEnvelopesCount,
  getBarrage,
} from '../../service/api';
import { getQueryString } from '../../utils/tools';

const styles = {
  infoContainer: {
    background: 'linear-gradient(180deg, #fa5a3c, #F74A5D, #B52682, #F74B5C)',
  },
  shareWrap: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '22px',
  },
  shareBox: {
    position: 'relative',
    marginRight: '60px',
  },
  shareImg: {
    display: 'block',
    margin: '0 auto 4px',
    width: '48px',
    height: '48px',
  },
  shareText: {
    margin: '0 auto',
    color: '#333',
    fontSize: '11px',
    fontFamily: 'PingFangSC-Regular',
    textAlign: 'center',
  },
  shareTag: {
    color: '#fff',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '10px',
    height: '15px',
    lineHeight: '15px',
    padding: '0 5px',
    borderRadius: '8px 8px 8px 0',
    border: '1px solid #fff',
    position: 'absolute',
    right: '-32px',
    top: '2px',
    background: 'linear-gradient(180deg, #F14760, #F74C59)',
  },
  shareType: {
    color: '#3AC939',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '10px',
    padding: '2px',
    borderRadius: '50%',
    border: '1px solid #3AC939',
    position: 'absolute',
    right: '-6px',
    bottom: '22px',
    background: '#fff',
  },
  infoBox: {
    padding: '0 16px 16px 16px',
    boxSizing: 'border-box',
    marginTop: '38px',
  },
  pullLoadWrap: {
    height: '100%',
  },
  loadingText: {
    width: '100%',
    lineHeight: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '14px',
    color: '#666',
    fontFamily: 'PingFangSC-Regular',
  },
  bgImg: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  bgTitle: {
    position: 'absolute',
    top: 0,
    left: 0,
    color: '#fff',
    fontSize: '12px',
    fontFamily: 'PingFangSC-Regular',
    width: '106px',
    height: '30px',
    lineHeight: '30px',
    textAlign: 'center',
    borderRadius: '0 0 15px 15px',
    background: 'linear-gradient(30deg, #FA324D 30%, #feb480)',
  },
  inviteMakeMoneyBtn: {
    margin: '0 auto 20px',
    width: '190px',
    height: '44px',
    lineHeight: '44px',
    color: '#fff',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '18px',
    textAlign: 'center',
    background: 'linear-gradient(180deg, #FFC933, #FA5A4C)',
    boxShadow: '0px 2px 0px #FFED47',
    borderRadius: '22px',
  },
  waitNumWrap: {
    margin: '0 8px',
    boxSizing: 'border-box',
    position: 'relative',
  },
  waitBg1: {
    background: 'linear-gradient(180deg, #FC665B, #FA324D)',
    width: '100%',
    height: '40px',
    borderRadius: '10px',
  },
  waitBg2: {
    background: '#E03F52',
    width: '100%',
    height: '14px',
    borderRadius: '7px',
    position: 'absolute',
    top: '16px',
    left: 0,
  },
  waitWrap: {
    width: '100%',
    padding: '0 6px',
    boxSizing: 'border-box',
    position: 'absolute',
    top: '20px',
    left: 0,
  },
  waitBox: {
    width: '100%',
    height: '40px',
    background: '#fff',
    lineHeight: '40px',
    textAlign: 'center',
    borderRadius: '0 0 10px 10px',
    color: '#333',
    fontSize: '14px',
    fontFamily: 'PingFangSC-Regular',
  },
  waitNum: {
    color: '#FF000E',
  },
  ruleWrap: {
    background: '#fff',
    borderRadius: '10px',
    marginBottom: '20px',
    padding: '15px 10px',
    boxSizing: 'border-box',
    position: 'relative',
  },
  ruleTitle: {
    color: '#5C4B3B',
    fontSize: '18px',
    fontFamily: 'PingFangSC-Semibold',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    top: '15px',
    width: '100%',
  },
  titleBg: {
    width: '117px',
    height: '18px',
    borderRadius: '9px',
    background: '#FFE1C2',
    margin: '7px auto 0',
  },
  ruleList: {
    marginTop: '16px',
  },
  ruleItem: {
    color: '#333',
    fontSize: '14px',
    fontFamily: 'PingFangSC-Regular',
    lineHeight: '22px',
  },
  listWrap: {
    background: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  tabItem: {
    background: '#fff',
    textAlign: 'center',
    lineHeight: '49px',
    fontSize: '16px',
    fontFamily: 'PingFangSC-Regular',
    width: '50%',
  },
  menuWrap: {
    display: 'flex',
    boxShadow: '0 2px 10px rgba(58, 59, 60, 0.1)',
  },
  bagTip: {
    color: '#333',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    textAlign: 'center',
    padding: '16px 0 12px',
  },
  bagTipColor: {
    color: '#FF000E',
  },
  listBox: {
    background: '#fff',
    padding: '10px 5px 0',
    boxShadow: '0 -2px 10px rgba(58, 59, 60, 0.1)',
  },
  boxTitle: {
    textAlign: 'center',
    marginBottom: '16px',
    marginTop: '8px',
    fontSize: '20px',
    color: '#333',
    fontFamily: 'PingFangSC-Medium',
  },
  noDataWrap: {
    padding: '80px 0 197px',
  },
  noDataImg: {
    width: '90px',
    height: '70px',
    display: 'block',
    margin: '0 auto 10px',
  },
  noDataText: {
    textAlign: 'center',
    color: '#999',
    fontSize: '15px',
    fontFamily: 'PingFangSC-Regular',
    marginLeft: '14px',
  },
};
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      action: STATS.init,
      listData: [],
      envelopesCount: {},
      loadMoreText: '',
      loadingState: {
        loading: '加载中...',
        noMoreData: '-我是有底线的-',
        failure: '好嗨哟，居然请求失败了 =.=!',
        emptyData: '暂无数据',
        noData: '',
      },
      currentPage: 1,
      tabType: 1,
      tab: [
        {
          name: '我的红包',
          type: 1,
        },
        {
          name: '邀请达人',
          type: 2,
        },
      ],
      isBag: false,
      barrageList: [],
      bagList: [],
      isOpen: false,
      animation: true,
      bagId: '',
      bagItem: {},
      bagBgIndex: 0,
    };
  }

  componentDidMount() {
    this.hiddenAppModal();
    this.init();
    this.getBarrage();
  }

  init = () => {
    this.onHeaderRefresh();
    this.redEnvelopesCount();
  };

  hiddenAppModal = () => {
    setTimeout(() => {
      if (window.postMessage) {
        const datas = {
          isVerifity: true,
          isHiddenFloatBtn: true,
          type: 1,
        };
        window.postMessage(JSON.stringify(datas), '*');
      } else {
        console.log('没有window.postMessage');
      }
    }, 200);
  };

  changeTab = type => {
    this.setState(
      {
        tabType: type,
      },
      () => {
        this.onHeaderRefresh();
      },
    );
  };

  handleAction = action => {
    const { tabType } = this.state;
    if (tabType === 1) {
      if (action === STATS.refreshing) {
        // 刷新
        this.onHeaderRefresh();
      } else if (action === STATS.loading && this.canLoadMore) {
        // 加载更多
        this.onFooterLoad();
      }
    }
  };

  openBag = (id, item) => {
    const num = Math.random().toFixed(0);
    this.setState({
      bagId: id,
      bagItem: item,
      isOpen: false,
      bagBgIndex: num,
    });
    this.handleBag(true);
  };

  handleBag = boo => {
    this.setState({
      isBag: boo,
    });
  };

  scrollToAnchor = anchorName => {
    if (anchorName) {
      // 找到锚点
      const anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }
  };

  // 分享
  pressShare = () => {
    const invitationCode = getQueryString('invitationCode').substr(0, 6);
    const params = {
      isShare: true,
      isVerifity: true,
      shareInfo: {
        type: 'news',
        isShowFriend: false,
        shareTitle: '【免费领】抽纸、洗衣液、零食',
        shareText: `${window.document.activeH5Url}/newPeopleShare`,
        shareDesc: `海量爆款热品免费得`,
        shareTkl: `米粒生活温馨提示：\n您的免单商品还未领取，再不来就要被抢没啦！\n还包邮哦，千万别错过！\n-------------\n下载链接：https://a.app.qq.com/o/simple.jsp?pkgname=com.vxiaoke.ricelife.app\n邀请码：${invitationCode}`,
      },
    };

    setTimeout(() => {
      window.postMessage(JSON.stringify(params));
    }, 200);
  };

  onHeaderRefresh = () => {
    console.log('下拉刷新===onHeaderRefresh');
    this.canLoadMore = false;
    this.setState(
      {
        currentPage: 1,
        listData: [],
      },
      () => {
        this.redEnvelopesList();
      },
    );
  };

  // 上拉加载
  onFooterLoad = () => {
    if (this.canLoadMore) {
      console.log('上拉加载===onFooterLoad');
      this.canLoadMore = false;
      this.redEnvelopesList();
    }
  };

  /**
   * 接口请求
   */
  redEnvelopesList = async () => {
    const { loadingState, tabType, listData } = this.state;
    let { currentPage } = this.state;
    let loadMoreText = loadingState.loading;
    this.setState({ loadMoreText });
    let res = '';
    if (tabType === 1) {
      res = await redEnvelopesList(currentPage);
    } else {
      res = await getList(currentPage);
    }

    if (res && res.length) {
      currentPage++;
      loadMoreText = '';
      this.canLoadMore = true;
      this.setState({
        listData: [...listData, ...res],
        currentPage,
      });
    } else if (listData.length > 0) {
      loadMoreText = loadingState.noMoreData;
    } else {
      loadMoreText = loadingState.noData;
    }
    this.setState({
      loadMoreText,
    });
  };

  redEnvelopesCount = async () => {
    const res = await redEnvelopesCount();
    if (res) {
      this.setState({
        envelopesCount: res,
      });
    }
  };

  async getBagList() {
    const { bagId } = this.state;
    const myAudio = new Audio();
    myAudio.preload = true;
    myAudio.loop = false;
    myAudio.src = require('@assets/coin.mp3');
    const res = await openRedEnvelopes(bagId);
    if (res && !res.code) {
      myAudio.play();
      this.setState({
        bagList: res,
        isOpen: true,
      });
      this.init();
    }
  }

  async getBarrage() {
    const res = await getBarrage();
    if (res && !res.code) {
      this.setState({
        barrageList: res,
      });
    }
  }

  loadingText = () => {
    const { loadMoreText } = this.state;
    if (loadMoreText) {
      return <div style={styles.loadingText}>{loadMoreText}</div>;
    }
  };

  renderList = () => {
    const { listData, tabType } = this.state;
    if (tabType === 1) {
      return listData.map((item, index) => {
        return <RedEnvelopesItem info={item} key={index} openBag={this.openBag} />;
      });
    }
    return listData.map((item, index) => {
      return <InviteItem info={item} key={index} index={index} />;
    });
  };

  renderTab = () => {
    const { tab, tabType } = this.state;
    return tab.map((item, index) => {
      return (
        <div
          key={index}
          onClick={() => this.changeTab(item.type)}
          style={{
            ...styles.tabItem,
            background: item.type === tabType && 'linear-gradient(180deg, #FAAB50, #FA7250)',
            color: item.type === tabType ? '#fff' : '#FA593F',
          }}
        >
          {item.name}
        </div>
      );
    });
  };

  render() {
    const {
      listData,
      action,
      tabType,
      bagItem,
      isBag,
      isOpen,
      bagList,
      barrageList,
      envelopesCount,
      bagBgIndex,
    } = this.state;
    return (
      <div style={styles.container}>
        {barrageList.length > 0 && <Barrage barrageList={barrageList} />}
        <div style={styles.topBg}>
          <img style={styles.bgImg} src={require('@assets/RedEnvelopes/bgImg.png')} alt="" />
          <div style={styles.bgTitle}>店长专属活动</div>
        </div>
        <div style={styles.infoContainer}>
          <div onClick={this.pressShare} style={styles.inviteMakeMoneyBtn}>
            立即邀请赚钱>
          </div>
          <div style={styles.waitNumWrap} onClick={() => this.scrollToAnchor('listScreens')}>
            <div style={styles.waitBg1} />
            <div style={styles.waitBg2} />
            <div style={styles.waitWrap}>
              <div style={styles.waitBox}>
                待拆红包：
                <span style={styles.waitNum}>{envelopesCount.count || '0'}</span>个
              </div>
            </div>
          </div>
          <div style={styles.infoBox}>
            <div style={styles.ruleWrap}>
              <div style={styles.ruleTitle}>活动规则</div>
              <div style={styles.titleBg} />
              <div style={styles.ruleList}>
                <div style={styles.ruleItem}>1、该活动面向开通门店的店长</div>
                <div style={styles.ruleItem}>
                  2、即日起，店长邀请好友完成首次购物并登录米粒生活APP，立得现金红包奖励
                </div>
                <div style={styles.ruleItem}>
                  3、邀请好友没有数量限制，邀请越多奖励越多，上不封顶
                </div>
                <div style={styles.ruleItem}>
                  4、返现时间：好友确认收货后次月25号返现到钱包，可直接提现
                </div>
                <div style={styles.ruleItem}>5、退款退货：如出现退款、退货，红包将被收回</div>
                <div style={styles.ruleItem}>6、活动最终解释权归米粒生活所有</div>
              </div>
              <div style={styles.shareWrap}>
                <div style={styles.shareBox} onClick={this.pressShare}>
                  <img style={styles.shareImg} src={require('@assets/weChat.png')} />
                  <div style={styles.shareTag}>赚双倍</div>
                  <div style={styles.shareType}>群</div>
                  <div style={styles.shareText}>微信群</div>
                </div>
                <div onClick={this.pressShare}>
                  <img style={styles.shareImg} src={require('@assets/weChat.png')} />
                  <div style={styles.shareText}>微信好友</div>
                </div>
              </div>
            </div>
            <div style={styles.listWrap} id="listScreens">
              <div style={styles.menuWrap}>{this.renderTab()}</div>
              {tabType === 1 && envelopesCount.count > 0 && (
                <div style={styles.bagTip}>
                  待拆红包：
                  <span style={styles.bagTipColor}>{envelopesCount.count || '0'}</span>个
                </div>
              )}
              {tabType === 1 && envelopesCount.count <= 0 && listData.length > 0 && (
                <div style={styles.bagTip}>红包已拆完，快去邀请好友购物，继续拆红包~</div>
              )}
              {tabType === 2 && (
                <div style={styles.bagTip}>
                  榜单每天
                  <span style={styles.bagTipColor}>0点</span>
                  更新，以奖励金额为准
                </div>
              )}
              <div style={styles.listBox}>
                {tabType === 2 && listData.length > 0 && <div style={styles.boxTitle}>排行榜</div>}
                {listData.length > 0 && (
                  <ReactPullLoad
                    style={styles.pullLoadWrap}
                    handleAction={this.handleAction}
                    action={action}
                  >
                    {this.renderList()}
                  </ReactPullLoad>
                )}
                {this.loadingText()}
                {listData.length === 0 && (
                  <div style={styles.noDataWrap}>
                    <img style={styles.noDataImg} src={require('@assets/noData.png')} />
                    <div style={styles.noDataText}>{tabType === 1 ? '暂无红包' : '暂无数据'}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {isBag && (
          <BagItem
            isOpen={isOpen}
            bagBgIndex={bagBgIndex}
            bagList={bagList}
            bagItem={bagItem}
            handleBag={this.handleBag}
            getBagList={this.getBagList.bind(this)}
          />
        )}
      </div>
    );
  }
}
