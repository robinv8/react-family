/*
 * @Description:
 * @Date: 2020-01-16 11:31:24
 * @Author:
 * @LastEditors  : robin
 * @LastEditTime : 2020-01-16 19:35:00
 */
import React from 'react';
import { ListView, PullToRefresh } from 'antd-mobile';
import Empty from './Empty';
import Root, { ApiServices } from '@HOC/Root';
import './Style.css';
const styles = {
  containerWrap: {
    position: 'absolute',
    width: '100%',
    minHeight: '100%',
    boxSizing: 'border-box',
    paddingTop: 12,
    display: 'flex',
    paddingBottom: 50,
    backgroundColor: '#f4f4f4',
  },
  item: {
    display: 'flex',
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
    marginBottom: 8,
    marginLeft: 12,
    marginRight: 12,
  },
  img: {
    width: 54,
    height: 54,
    backgroundColor: '#666',
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  block1: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text1: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 15,
    color: '#333',
  },
  text2: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 14,
    color: '#E00413',
  },
  text3: {
    fontSize: 14,
    color: '#E00413',
  },
  text4: {
    marginLeft: 8,
  },
  text5: {
    fontSize: 12,
    color: '#666',
  },
  block2: {
    marginTop: 6,
    marginBottom: 4,
  },
};
@Root
class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.loadingState = {
      loading: '加载中...',
      noMoreData: '-我是有底线的-',
      failure: '好嗨哟，居然请求失败了 =.=!',
      emptyData: '暂无数据',
    };
    this.state = {
      dataSource,
      loadMoreText: '',
      listData: [],
      hasEmpty: false,
    };
  }
  cutPage = 1;
  componentDidMount() {
    this.getList();
  }

  getList = async () => {
    const res = await ApiServices.gasInfoOrderList(this.cutPage);
    if (res) {
      const orderInfoList = res.orderInfoList || [];
      if (orderInfoList.length > 0) {
        if (this.cutPage === 1) {
          this.setState({
            listData: orderInfoList,
          });
        } else {
          const { listData } = this.state;
          this.setState({
            listData: [...listData, ...orderInfoList],
          });
        }
        this.cutPage++;
      } else {
        if (this.cutPage === 1) {
          this.setState({
            hasEmpty: true,
          });
        } else {
          this.setState({
            loadMoreText: this.loadingState.noMoreData,
          });
        }
      }
    }
  };
  onHeaderRefresh = () => {
    this.cutPage = 1;
  };
  toOrderDetail = id => {
    const datas = {
      isVerifity: true,
      isJump: true,
      jumpInfo: {
        routeName: 'WebView',
        params: {
          title: '加油订单',
          src: `${window.document.activeH5Url}/oilOrderDetail/${id}`, // 页面地址
        },
      },
    };
    setTimeout(() => {
      window.postMessage(JSON.stringify(datas), '*');
    }, 100);
  };
  renderItem = ({ orderId, gasName, amountPay, litre, oilNo, payTime }) => {
    return (
      <div style={styles.item} onClick={() => this.toOrderDetail(orderId)}>
        <div style={styles.content}>
          <div style={styles.block1}>
            <span style={styles.text1}>{gasName}</span>
            <span style={styles.text2}>￥{amountPay}</span>
          </div>
          <div style={styles.block2}>
            <span style={styles.text3}>{litre}升</span>
            <span style={{ ...styles.text3, ...styles.text4 }}>{oilNo}</span>
          </div>
          <span style={styles.text5}>{payTime}</span>
        </div>
      </div>
    );
  };
  onEndReached = () => {
    this.setState(
      {
        loadMoreText: this.loadingState.loading,
      },
      () => {
        this.getList();
      },
    );
  };
  render() {
    const { loadMoreText, dataSource, hasEmpty, listData } = this.state;
    if (hasEmpty) {
      return (
        <div style={styles.containerWrap}>
          <Empty />
        </div>
      );
    }
    return (
      <ListView
        style={styles.containerWrap}
        ref={el => (this.lv = el)}
        dataSource={dataSource.cloneWithRows(listData)}
        renderFooter={() => <div style={{ padding: 10, textAlign: 'center' }}>{loadMoreText}</div>}
        renderRow={this.renderItem}
        className="am-list orderWrap"
        pageSize={10}
        pullToRefresh={<PullToRefresh refreshing={false} onRefresh={this.onHeaderRefresh} />}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={20}
      />
    );
  }
}

export default Index;
