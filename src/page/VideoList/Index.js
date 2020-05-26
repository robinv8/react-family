import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { getVideoList } from '../../service/api';

const styles = {
  container: {
    padding: '18px 12px',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#999',
    fontFamily: 'PingFangSC-Regular',
    width: '100%',
    padding: '10px 0',
  },
  videoItem: {
    width: '100%',
    height: '100%',
  },
  videoBox: {
    marginBottom: '24px',
  },
  title: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '16px',
    color: '#333',
    marginBottom: '12px',
  },
  videoWrap: {
    position: 'relative',
    width: '100%',
    height: '190px',
    overflow: 'hidden',
    borderRadius: '4px',
    background: '#fff',
  },
  videoImg: {
    width: '100%',
    height: 'auto',
  },
  videoImgBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9,
  },
  playIconBox: {
    width: '100%',
    height: '100%',
    zIndex: 12,
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    width: '56px',
    height: '56px',
  },
};
export default class Index extends Component {
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
        noData: '',
      },
      currentPage: 1,
      listData: [],
      videoId: '',
    };
  }

  componentDidMount() {
    const { match } = this.props;
    this.setState(
      {
        videoId: match.params.id,
      },
      () => {
        this.onHeaderRefresh();
      },
    );
  }

  onHeaderRefresh = () => {
    console.log('下拉刷新===onHeaderRefresh');
    this.canLoadMore = false;
    this.setState(
      {
        currentPage: 1,
        listData: [],
      },
      () => {
        this.getVideoList();
      },
    );
  };

  // 上拉加载
  onFooterLoad = () => {
    if (this.canLoadMore) {
      console.log('上拉加载===onFooterLoad');
      this.canLoadMore = false;
      this.getVideoList();
    }
  };

  playVideo = index => {
    const { listData: list } = this.state;
    list[index].isPlay = true;
    this.setState(
      {
        listData: list,
      },
      () => {
        document.getElementById(`videoPlayer${index}`).play();
      },
    );
  };

  /**
   * 接口请求
   */
  async getVideoList() {
    const { loadingState, videoId, listData } = this.state;
    let { currentPage } = this.state;
    let loadMoreText = loadingState.loading;
    this.setState({ loadMoreText });
    const params = {
      videoId,
      currentPage,
    };
    const res = await getVideoList(params);

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
  }

  loadingText = () => {
    const { loadMoreText } = this.state;
    if (loadMoreText) {
      return (
        <div key={1} style={styles.loadingText}>
          {loadMoreText}
        </div>
      );
    }
  };

  renderList = () => {
    const { listData } = this.state;
    if (listData.length > 0) {
      return listData.map((item, index) => {
        return (
          <div style={styles.videoBox} key={index}>
            <div style={styles.title}>
              {index + 1}.{item.title}
            </div>
            <div style={styles.videoWrap}>
              {!item.isPlay && (
                <div style={styles.videoImgBox} onClick={() => this.playVideo(index)}>
                  <img style={styles.videoImg} src={item.imgUrl} alt="" />
                  <div style={styles.playIconBox}>
                    <img
                      style={styles.playIcon}
                      src={require('@assets/icon-fix-play.png')}
                      alt=""
                    />
                  </div>
                </div>
              )}
              <video
                controls="controls"
                style={styles.videoItem}
                key={index}
                src={item.contentUrl}
                id={`videoPlayer${index}`}
              />
            </div>
          </div>
        );
      });
    }
  };

  render() {
    const { hasMore } = this.state;
    return (
      <div style={styles.container}>
        <InfiniteScroll pageStart={0} loadMore={this.onFooterLoad} hasMore={hasMore}>
          {this.renderList()}
        </InfiniteScroll>
        {this.loadingText()}
      </div>
    );
  }
}
