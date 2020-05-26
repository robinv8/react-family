import React from 'react';
import { ListView, PullToRefresh, Toast } from 'antd-mobile';
import OilItem from './OilItem';
import Menu from './Menu';
import MenuModal from './MenuModal';
import { getOilList } from '@api';
import Empty from './Empty';

const styles = {
  container: {
    background: '#f4f4f4',
    paddingBottom: '50px',
    paddingTop: '45px',
    height: '100vh',
    boxSizing: 'border-box',
  },
  listViewWrap: {
    height: '100%',
    padding: '8px 12px',
    boxSizing: 'border-box',
  },
  listView: {
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
  emptyBox: {
    paddingTop: '180px',
  },
};

export default class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.listData = [];

    this.state = {
      listData: [],
      currentPage: 1,
      dataSource,
      refreshing: true,
      loadMoreText: '',
      loadingState: {
        loading: '加载中...',
        noMoreData: '-我是有底线的-',
        failure: '好嗨哟，居然请求失败了 =.=!',
        emptyData: '暂无数据',
        noData: '我是有底线的',
      },
      // 加油筛选选项卡
      menu1: [
        {
          name: '距离最近',
          key: 0,
          isChoose: true,
        },
        {
          name: '价格最低',
          key: 1,
        },
      ],
      menu2: [
        {
          name: '92号油',
          key: 92,
          isChoose: true,
        },
        {
          name: '95号油',
          key: 95,
        },
        {
          name: '0号油',
          key: 0,
        },
        {
          name: '98号油',
          key: 98,
        },
      ],
      tabName1: '距离最近',
      tabName2: '92号油',
      sort: 0,
      oilNo: 92,
      isMenuChange1: false,
      isMenuChange2: false,
      showChooseModal: false,
      showEmpty: false,
    };
  }

  componentDidMount() {
    const localData = JSON.parse(localStorage.getItem('localData'));
    console.log('localData=======', localData);
    if (localData && localData.areaId) {
      Toast.loading('加载中...', 0);
      this.localAreaId = localData.areaId;
      this.location = localData.location;
      this.getOilList();
    }
  }

  init = () => {
    Toast.loading('加载中...', 0);
    const mobileType = navigator.userAgent;
    const isAndroid = mobileType.indexOf('Android') > -1 || mobileType.indexOf('Linux') > -1;

    window.addEventListener('message', e => {
      const message = isAndroid ? e.data : JSON.parse(e.data);
      console.log('接收postmessage', message);
      if (message && message.localAreaId && message.localAreaId.areaId) {
        this.localAreaId = message.localAreaId.areaId;
        this.location = message.localAreaId.location;
        localStorage.setItem('localData', JSON.stringify(message.localAreaId));
        this.getOilList();
      }
    });
  };

  // 是否显示筛选选项
  handleMenu = (tab, boo) => {
    this.tab = tab;
    this.setState({
      showChooseModal: boo,
    });
  };

  // 切换筛选选项
  changeMenu = item => {
    Toast.loading('加载中...', 0);
    const { isMenuChange1, isMenuChange2, sort, oilNo, tabName1, tabName2 } = this.state;
    const data = {
      isMenuChange1,
      isMenuChange2,
      sort,
      oilNo,
      tabName1,
      tabName2,
    };
    if (this.tab === 1) {
      data.isMenuChange1 = true;
      data.sort = item.key;
      data.tabName1 = item.name;
    } else {
      data.isMenuChange2 = true;
      data.oilNo = item.key;
      data.tabName2 = item.name;
    }
    this.setState(
      {
        ...data,
        showChooseModal: false,
      },
      () => {
        this.lv.scrollTo(0, 0);
        this.onHeaderRefresh();
      },
    );
  };

  // 跳转加油详情
  jumpPage = item => {
    const { oilNo } = this.state;
    const datas = {
      isVerifity: true,
      isJump: true,
      jumpInfo: {
        routeName: 'WebView',
        params: {
          title: '全国加油优惠',
          src: `${window.document.activeH5Url}/oilDetail/${item.gasId}/${this.location}/${oilNo}`,
        },
      },
    };
    setTimeout(() => {
      window.postMessage(JSON.stringify(datas), '*');
    }, 100);
  };

  // 跳转导航
  jumpNativeMap = item => {
    const datas = {
      isVerifity: true,
      isJump: true,
      jumpInfo: {
        type: 'native',
        pageKey: 'enterMapAddressNavigation',
        longitude: item.gasAddressLongitude, // 终点经度
        latitude: item.gasAddressLatitude, // 终点纬度
        address: item.gasAddress, // 地址
      },
    };
    setTimeout(() => {
      window.postMessage(JSON.stringify(datas), '*');
    }, 100);
  };

  // 下拉刷新
  onHeaderRefresh = () => {
    console.log('下拉刷新===onHeaderRefresh');
    this.canLoadMore = false;
    this.listData = [];
    this.setState(
      {
        showEmpty: false,
        currentPage: 1,
        refreshing: true,
      },
      () => {
        this.getOilList();
      },
    );
  };

  // 上拉加载
  onFooterLoad = () => {
    if (this.canLoadMore) {
      console.log('上拉加载===onFooterLoad');
      this.canLoadMore = false;
      this.getOilList();
    }
  };

  /**
   * 接口请求
   */
  getOilList = async () => {
    const { loadingState, sort, oilNo } = this.state;
    let { currentPage } = this.state;
    let loadMoreText = loadingState.loading;
    this.setState({ loadMoreText, showEmpty: false });
    const params = {
      pageNo: currentPage,
      pageSize: 10,
      sort,
      oilNo,
      location: this.location,
      areaId: this.localAreaId,
    };
    const res = await getOilList(params);

    if (res && res.length) {
      currentPage++;
      loadMoreText = '';
      this.canLoadMore = true;
      this.listData = [...this.listData, ...res];
      this.setState({
        listData: this.listData,
        currentPage,
        refreshing: false,
      });
    } else {
      if (this.listData.length > 0) {
        loadMoreText = loadingState.noMoreData;
        this.setState({
          loadMoreText,
          refreshing: false,
        });
      } else {
        loadMoreText = loadingState.emptyData;
        this.setState({
          loadMoreText,
          refreshing: false,
          showEmpty: true,
          listData: [],
        });
      }
    }
    this.setState({
      loadMoreText,
    });
    Toast.hide();
  };

  renderList = rowData => {
    return <OilItem item={rowData} jumpPage={this.jumpPage} jumpNativeMap={this.jumpNativeMap} />;
  };

  // 列表加载状态文案
  loadingText = () => {
    const { loadMoreText } = this.state;
    return <div style={styles.loadingText}>{loadMoreText}</div>;
  };

  render() {
    const {
      listData,
      dataSource,
      refreshing,
      menu1,
      menu2,
      tabName1,
      tabName2,
      isMenuChange1,
      isMenuChange2,
      showChooseModal,
      sort,
      oilNo,
      showEmpty,
    } = this.state;
    return (
      <div style={styles.container}>
        <Menu
          menu1={menu1}
          menu2={menu2}
          tabName1={tabName1}
          tabName2={tabName2}
          isMenuChange1={isMenuChange1}
          isMenuChange2={isMenuChange2}
          showChooseModal={showChooseModal}
          handleMenu={this.handleMenu}
        />
        {listData && listData.length > 0 && (
          <div style={styles.listViewWrap} className="oilList">
            <ListView
              ref={el => (this.lv = el)}
              dataSource={dataSource.cloneWithRows(listData)}
              renderFooter={() => this.loadingText()}
              renderRow={this.renderList}
              style={styles.listView}
              pullToRefresh={
                <PullToRefresh refreshing={refreshing} onRefresh={this.onHeaderRefresh} />
              }
              onEndReached={this.onFooterLoad}
              pageSize={5}
            />
          </div>
        )}
        {showChooseModal && (
          <MenuModal
            menuData={this.tab === 1 ? menu1 : menu2}
            sort={sort}
            oilNo={oilNo}
            tab={this.tab}
            changeMenu={this.changeMenu}
            handleMenu={this.handleMenu}
          />
        )}
        {showEmpty && (
          <div style={styles.emptyBox}>
            <Empty text="该城市暂无合作油站" />
          </div>
        )}
      </div>
    );
  }
}
