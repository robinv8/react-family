import React from 'react';
import { List, Button, ListView } from 'antd-mobile';
import { lotteryDetail } from '../../service/api';

const { Item } = List;
const { Brief } = Item;
const styles = {
  btn1: {
    width: 68,
    height: 28,
    fontSize: 12,
    borderRadius: 14,
    borderWidth: 0,
    backgroundColor: '#D8D8D8',
    color: '#fff',
  },
  btn2: {
    backgroundImage: 'linear-gradient(-45deg, #FB9D54 0%, #FF5947 100%)',
    borderRadius: 14,
    color: '#fff',
    width: 92,
    height: 28,
    fontSize: 12,
  },
  btn2Wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  itemWrap: {
    height: 70,
    paddingLeft: 24,
    paddingRight: 13,
  },
  text1: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'PingFangSC-Medium',
  },
};

export default class LotteryDetail extends React.Component {
  cutPage = 1;

  data = [];

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      loadMoreText: '',
      loadingState: {
        loading: '加载中...',
        noMoreData: '-我是有底线的-',
        failure: '好嗨哟，居然请求失败了 =.=!',
        emptyData: '暂无数据',
      },
    };
  }

  componentDidMount() {
    const { dataSource } = this.state;

    this.getLotteryDetail();

    setInterval(() => {
      this.data.forEach(item => {
        if (item.lotteryType === 7 && item.lotteryFreeStatus === 0) {
          if (item.expireTime > -1) {
            const timeObj = this.countTime(item.expireTime);
            item.expireTime -= 1;
            item.expireTimeObj = timeObj;
          } else {
            item.lotteryFreeStatus = 2;
          }
        }
      });
      this.setState({
        dataSource: dataSource.cloneWithRows(this.data),
      });
    }, 1000);
  }

  countTime = time => {
    const d = Math.floor(time / (60 * 60 * 24));
    const h = Math.floor((time - d * 24 * 60 * 60) / 3600);
    const m = Math.floor((time - d * 24 * 60 * 60 - h * 3600) / 60);
    const s = Math.floor(time - d * 24 * 60 * 60 - h * 3600 - m * 60);
    return { h: h > 9 ? h : `0${h}`, m: m > 9 ? m : `0${m}`, s: s > 9 ? s : `0${s}` };
  };

  getLotteryDetail = async () => {
    const { dataSource, loadingState } = this.state;
    let loadMoreText = loadingState.loading;
    this.setState({ loadMoreText });

    const res = await lotteryDetail(this.cutPage);
    if (res) {
      this.cutPage += 1;
      loadMoreText = '';
      this.data = [...this.data, ...res];
      this.setState({
        dataSource: dataSource.cloneWithRows(this.data),
        isLoading: true,
        hasMore: true,
      });
    } else {
      if (dataSource.length > 0) {
        loadMoreText = loadingState.noMoreData;
      } else {
        loadMoreText = loadingState.emptyData;
      }
      this.setState({
        isLoading: false,
        hasMore: false,
      });
    }
    this.setState({
      loadMoreText,
    });
  };

  onEndReached = event => {
    const { isLoading, hasMore, dataSource } = this.state;
    if (isLoading && !hasMore) {
      return;
    }
    this.getLotteryDetail();
  };

  toGoodsDetailView = expireTimeObj => {
    return (
      <div style={styles.btn2Wrap}>
        <Button size="small" style={styles.btn2} onClick={this.onToNewPeople}>
          去挑选商品
        </Button>
        <span style={{ fontSize: 12, color: '#333', lineHeight: '12px', marginTop: 8 }}>
          剩余时间：
          {expireTimeObj ? `${expireTimeObj.h}:${expireTimeObj.m}:${expireTimeObj.s}` : '00:00:00'}
        </span>
      </div>
    );
  };

  onToNewPeople = () => {
    const data = {
      isVerifity: true,
      isJump: true,
      jumpInfo: {
        routeName: 'WebView',
        params: {
          title: '新人免单',
          src: `${window.document.activeH5Url}/newPeople`,
        },
      },
    };
    setTimeout(() => {
      window.postMessage(JSON.stringify(data), '*');
    }, 100);
  };

  render() {
    const { loadMoreText } = this.state;
    const row = (rowData, sectionID, rowID) => {
      let extra = <span style={styles.text1}>{rowData.value}</span>;
      if (rowData.lotteryType === 0) {
        extra = null;
      }
      if (rowData.lotteryType === 7 && rowData.lotteryFreeStatus === 0) {
        extra = this.toGoodsDetailView(rowData.expireTimeObj);
      }
      if (rowData.lotteryFreeStatus === 1) {
        extra = (
          <Button size="small" inline style={styles.btn1}>
            已完成
          </Button>
        );
      } else if (rowData.lotteryFreeStatus === 2) {
        extra = (
          <Button size="small" inline style={styles.btn1}>
            已过期
          </Button>
        );
      }

      return (
        <List key={rowID}>
          <Item extra={extra} style={styles.itemWrap}>
            {rowData.lotteryGoodsName}
            <Brief>{rowData.time}</Brief>
          </Item>
        </List>
      );
    };
    const { isLoading, dataSource } = this.state;
    return (
      <ListView
        ref={el => (this.lv = el)}
        dataSource={dataSource}
        renderFooter={() => <div style={{ padding: 10, textAlign: 'center' }}>{loadMoreText}</div>}
        renderRow={row}
        className="am-list"
        pageSize={10}
        useBodyScroll
        onScroll={() => {
          console.log('scroll');
        }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={20}
      />
    );
  }
}
