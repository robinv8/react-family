import React from 'react';
import ReactPullLoad, { STATS } from 'react-pullload';
import CardList from '../../components/CreditCard/CardList';
import { creditCardList } from '../../service/api';
// import { Toast } from 'antd-mobile';
const styles = {
  container: {
    width: '100%',
    height: '100%',
    background: '#fff',
  },
  headWrap: {
    background: 'rgba(252,66,119, 0.1)',
    height: '28px',
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
  },
  tipIcon: {
    width: '14px',
    height: '14px',
    marginRight: '4px',
  },
  tipText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#FC4277',
    lineHeight: '12px',
  },
  loadingText: {
    width: '100%',
    height: '40px',
    lineHeight: '40px',
    textAlign: 'center',
    color: '#999',
    fontSize: '13px',
  },
  emptyWrap: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '80px',
  },
  emptyImg: {
    width: '150px',
    height: '150px',
  },
  emptyText: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '22px',
    marginTop: '8px',
  },
};
export default class CardDetail extends React.Component {
  state = {
    list: [],
    currentPage: 1,
    action: STATS.init,
    hasMore: false,
    showEmpty: false,
    loadMoreText: '加载中...',
  };

  componentDidMount() {
    this.getList();
  }

  handleAction = action => {
    console.log(this.canLoadMore);
    if (action === STATS.refreshing) {
      // 刷新
      this.onHeaderRefresh();
    } else if (action === STATS.loading && this.canLoadMore) {
      // 加载更多
      this.canLoadMore = false;
      this.onFooterLoad();
    }
  };

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

  onFooterLoad = () => {
    console.log('上拉加载===');
    this.getList();
  };

  loadingText = () => {
    const { loadMoreText } = this.state;
    return <div style={styles.loadingText}>{loadMoreText}</div>;
  };

  emptyState = () => {
    return (
      <div style={styles.emptyWrap}>
        <img style={styles.emptyImg} src={require('@assets/empty.png')} alt="" />
        <div style={styles.emptyText}>暂无收益记录，快去邀请赚钱吧~</div>
      </div>
    );
  };

  async getList() {
    let { currentPage, list } = this.state;
    const res = await creditCardList(currentPage);
    if (res && res.list && res.list.length) {
      currentPage++;
      this.canLoadMore = true;
      this.setState({
        list: [...list, ...res.list],
        currentPage,
        showEmpty: false,
        loadMoreText: res.list.length > 9 ? '加载中...' : '--我是有底线的--',
      });
    } else {
      let loadMoreText = '';
      if (list.length > 0) {
        loadMoreText = '--我是有底线的--';
      } else {
        loadMoreText = '';
      }
      this.setState({
        loadMoreText,
        showEmpty: !list.length,
      });
      this.canLoadMore = false;
    }
  }

  render() {
    const { list, showEmpty, action } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.headWrap}>
          <img style={styles.tipIcon} src={require('@assets/CreditCard/card-info.png')} alt="" />
          <span style={styles.tipText}>次月25日结算到钱包，可直接提现</span>
        </div>
        <ReactPullLoad handleAction={this.handleAction} action={action} style={{ width: '100%' }}>
          <CardList list={list} />
          {!showEmpty && this.loadingText()}
          {showEmpty && this.emptyState()}
        </ReactPullLoad>
      </div>
    );
  }
}
