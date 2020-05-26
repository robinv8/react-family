import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import questionList from '../../utils/question';
import { getQueryString } from '../../utils/tools';

const styles = {
  container: {
    background: '#f4f4f4',
  },
  questionWrap: {
    marginBottom: '12px',
    padding: '16px 12px 0 12px',
    boxSizing: 'border-box',
    background: '#fff',
  },
  title: {
    display: 'flex',
    marginBottom: '4px',
  },
  icon: {
    width: '22px',
    height: '22px',
    marginRight: '10px',
    borderRadius: '50%',
  },
  text: {
    fontFamily: 'PingFangSC-Medium',
    color: '#000',
    fontSize: '16px',
    lineHeight: '22px',
    flex: 1,
  },
  item: {
    fontFamily: 'PingFangSC-Regular',
    color: '#333',
    fontSize: '15px',
    lineHeight: '26px',
    padding: '8px 0',
  },
  shareBtn: {
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    fontFamily: 'PingFangSC-Regular',
    textAlign: 'center',
    borderRadius: '12px',
    padding: '4px 16px',
    position: 'fixed',
    right: '10px',
    top: '10px',
    zIndex: 99,
  },
};
export default class Index extends Component {
  state = {
    version: '',
    isShowShare: true,
  };

  componentDidMount() {
    const isWechat = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
    const version = getQueryString('version') || '1';
    this.isApp = getQueryString('isApp') || false;
    this.origin = window.document.activeH5Url;
    this.setState({
      version,
      isShowShare: version >= '2.6.0' && !isWechat,
    });
  }

  renderQuestion = () => {
    return questionList.question.map((item, index) => {
      return (
        <div style={styles.questionWrap} key={index}>
          <div style={styles.title}>
            <img style={styles.icon} src={item.icon} alt="" />
            <div style={styles.text}>{item.title}</div>
          </div>
          {this.renderList(item.list, index)}
        </div>
      );
    });
  };

  toShare = () => {
    const params = {
      isVerifity: true,
      isShare: true,
      shareInfo: {
        type: 'news',
        shareTitle: '常见问题', // 分享标题
        shareText: `${window.document.activeH5Url}/questionList`, // 分享内容
        shareDesc: '', // 描述信息
        isShowWeChat: true, // 是否显示转发到微信按钮
        isShowFriend: true, // 是否显示转发到朋友圈按钮
        isShowCopyText: false, // 是否显示复制文本到微信按钮
        shareTkl: '常见问题', // 需要复制到剪切板的内容
      },
    };
    window.postMessage(JSON.stringify(params));
  };

  jumpPage = (listIndex, index, version) => {
    const { history } = this.props;
    if (this.isApp) {
      const datas = {
        isVerifity: true,
        isJump: true,
        jumpInfo: {
          routeName: 'WebView',
          params: {
            title: '常见问题',
            src: `${this.origin}/questionDetail/${listIndex}/${index}/${version}`,
          },
        },
      };
      setTimeout(() => {
        window.postMessage(JSON.stringify(datas), '*');
      }, 100);
    } else {
      history.push({ pathname: `/questionDetail/${listIndex}/${index}/${version}` });
    }
  };

  renderList = (list, listIndex) => {
    const { version } = this.state;
    return list.map((item, index) => {
      return (
        <div
          style={{
            ...styles.item,
            borderBottom: index !== list.length - 1 && '1px solid #f4f4f4',
          }}
          onClick={() => this.jumpPage(listIndex, index, version)}
        >
          {item.ask}
        </div>
      );
    });
  };

  render() {
    const { isShowShare } = this.state;
    return (
      <div style={styles.container}>
        {isShowShare && (
          <div onClick={this.toShare} style={styles.shareBtn}>
            分享
          </div>
        )}
        {this.renderQuestion()}
      </div>
    );
  }
}
