import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { getSignDetail } from '../../service/api';
import './Style.css';

const fontFamilyNormal = 'PingFangSC-Regular';
const fontFamilyBold = 'PingFangSC-Medium';

const styles = {
  tabWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #f1f1f1',
    background: '#fff',
  },
  tabBox: {
    width: '49%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItem: {
    fontSize: '17px',
    fontFamily: fontFamilyBold,
    lineHeight: '47px',
    borderBottomStyle: 'solid',
    borderBottomWidth: '3px',
    borderBottomColor: '#000',
    textAlign: 'center',
  },
  tabLine: {
    height: '15px',
    width: '1px',
    background: '#D8D8D8',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#999',
    fontFamily: 'PingFangSC-Regular',
    width: '100%',
    padding: '10px 0',
  },
  itemWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 24px',
    boxSizing: 'border-box',
    background: '#fff',
    marginBottom: '1px',
  },
  itemTitle: {
    fontSize: '15px',
    fontFamily: fontFamilyBold,
    color: '#333',
    marginBottom: '12px',
  },
  itemTime: {
    fontSize: '13px',
    fontFamily: fontFamilyNormal,
    color: '#999',
  },
  price: {
    fontSize: '16px',
    fontFamily: fontFamilyBold,
    textAlign: 'right',
  },
  priceText: {
    fontSize: '12px',
    fontFamily: fontFamilyNormal,
    color: '#FF5000',
    marginTop: '8px',
    textAlign: 'right',
  },
};
export default class SignInDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      loadMoreText: '',
      loadingState: {
        loading: '加载中...',
        noMoreData: '-我是有底线的-',
        failure: '好嗨哟，居然请求失败了 =.=!',
        emptyData: '暂无数据',
      },
      currentPage: 1,
      tabIndex: 2,
      listData: [],
    };
  }

  componentDidMount() {
    this.onHeaderRefresh();
  }

  /**
   * 接口请求
   */
  async getSignDetail() {
    let { currentPage, tabIndex, loadingState, listData } = this.state;
    let loadMoreText = loadingState.loading;
    this.setState({ loadMoreText });

    const params = {
      pageNo: currentPage,
      status: tabIndex,
    };
    const res = await getSignDetail(params);

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
      loadMoreText = loadingState.emptyData;
    }
    this.setState({
      loadMoreText,
    });
  }

  changeTab = tabIndex => {
    this.setState(
      {
        tabIndex,
      },
      () => {
        this.onHeaderRefresh();
      },
    );
  };

  // 下拉刷新
  onHeaderRefresh = () => {
    console.log('下拉刷新===onHeaderRefresh');
    this.canLoadMore = false;
    this.setState(
      {
        currentPage: 1,
        listData: [],
      },
      () => {
        this.getSignDetail();
      },
    );
  };

  // 上拉加载
  onFooterLoad = () => {
    if (this.canLoadMore) {
      console.log('上拉加载===onFooterLoad');
      this.canLoadMore = false;
      this.getSignDetail();
    }
  };

  renderList = () => {
    const { listData } = this.state;
    if (listData.length > 0) {
      return listData.map((item, index) => {
        return (
          <div style={styles.itemWrap} key={index}>
            <div style={styles.itemBox}>
              <div style={styles.itemTitle}>{item.name}</div>
              <div style={styles.itemTime}>{item.time}</div>
            </div>
            <div style={styles.priceBox}>
              <div style={{ ...styles.price, color: item.type === 4 ? '#333' : '#FF5000' }}>
                {item.goldRiceNum}
              </div>
              {item.remark && <div style={styles.priceText}>{item.remark}</div>}
            </div>
          </div>
        );
      });
    }
  };

  loadingText = () => {
    const { loadMoreText } = this.state;
    if (loadMoreText) {
      return <div style={styles.loadingText}>{loadMoreText}</div>;
    }
  };

  render() {
    const { tabIndex, hasMore } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.tabWrap}>
          <div style={styles.tabBox}>
            <div
              onClick={() => this.changeTab(2)}
              style={{
                ...styles.tabItem,
                color: tabIndex === 2 ? '#FF5000' : '#333',
                borderBottomColor: tabIndex === 2 ? '#FF5000' : '#fff',
              }}
            >
              已发放
            </div>
          </div>
          <div style={styles.tabLine} />
          <div style={styles.tabBox}>
            <div
              onClick={() => this.changeTab(1)}
              style={{
                ...styles.tabItem,
                color: tabIndex === 1 ? '#FF5000' : '#333',
                borderBottomColor: tabIndex === 1 ? '#FF5000' : '#fff',
              }}
            >
              待发放
            </div>
          </div>
        </div>
        <div>
          <InfiniteScroll pageStart={0} loadMore={this.onFooterLoad} hasMore={hasMore}>
            {this.renderList()}
          </InfiniteScroll>
          {this.loadingText()}
        </div>
      </div>
    );
  }
}
