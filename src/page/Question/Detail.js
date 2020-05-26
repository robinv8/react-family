import React, { Component } from 'react';
import questionList from '../../utils/question';
import { getQueryString } from '../../utils/tools';

const styles = {
  container: {
    padding: '18px',
    boxSizing: 'border-box',
  },
  titleWrap: {
    display: 'flex',
    marginBottom: '14px',
  },
  infoWrap: {
    display: 'flex',
    borderBottom: '1px solid #dfdfdf',
    paddingBottom: '10px',
    flexWrap: 'wrap',
  },
  icon: {
    width: '19px',
    height: '21px',
    marginRight: '10px',
  },
  title: {
    flex: 1,
    fontFamily: 'PingFangSC-Medium',
    color: '#000',
    fontSize: '15px',
    lineHeight: '22px',
  },
  textItem: {
    flex: 1,
  },
  itemText: {
    fontFamily: 'PingFangSC-Medium',
    color: '#333',
    fontSize: '15px',
    lineHeight: '22px',
    marginBottom: '8px',
    width: '100%',
  },
  imgSmall: {
    width: '50%',
    height: 'auto',
    marginBottom: '10px',
  },
  imgBig: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
  },
  btnBox: {
    marginTop: '30px',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  btn: {
    margin: '0 10px',
    borderRadius: '20px',
    border: '1px solid #999',
    padding: '6px 20px',
    color: '#333',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '15px',
  },
  btnShare: {
    color: '#FC4277',
    border: '1px solid #FC4277',
  },
};
export default class Detail extends Component {
  state = {
    data: {},
    isWechat: false,
    isShowShare: true,
  };

  componentDidMount() {
    const { match } = this.props;
    const { listIndex } = match.params;
    const { itemIndex } = match.params;
    const { version } = match.params;
    const isWechat = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
    this.isApp = getQueryString('isApp') || false;
    this.origin = window.document.activeH5Url;
    this.setState({
      data: questionList.question[listIndex].list[itemIndex],
      listIndex,
      itemIndex,
      isWechat,
      isShowShare: version >= '2.6.0' && !isWechat,
    });
  }

  back = () => {
    const { isWechat } = this.state;
    const { history } = this.props;
    console.log('点击返回了', isWechat);
    if (isWechat) {
      console.log('微信内返回');
      history.push('/questionList');
    } else {
      console.log('goBack');
      if (this.isApp) {
        const datas = {
          isVerifity: true,
          isPop: true,
        };
        setTimeout(() => {
          window.postMessage(JSON.stringify(datas), '*');
        }, 100);
      } else {
        history.goBack();
      }
    }
  };

  toShare = () => {
    const { data, listIndex, itemIndex } = this.state;
    const params = {
      isVerifity: true,
      isShare: true,
      shareInfo: {
        type: 'news',
        shareTitle: data.ask, // 分享标题
        shareText: `${window.document.activeH5Url}/questionDetail?listIndex=${listIndex}&itemIndex=${itemIndex}&version=''`, // 分享内容
        shareDesc: '', // 描述信息
        isShowWeChat: true, // 是否显示转发到微信按钮
        isShowFriend: true, // 是否显示转发到朋友圈按钮
        isShowCopyText: false, // 是否显示复制文本到微信按钮
        shareTkl: data.ask, // 需要复制到剪切板的内容
      },
    };
    window.postMessage(JSON.stringify(params));
  };

  renderDetail = () => {
    const { data } = this.state;
    if (data.answer) {
      return data.answer.map((item, index) => {
        return (
          <div key={index}>
            {item.text && <div style={styles.itemText}>{item.text}</div>}
            {item.imgSmall && <img style={styles.imgSmall} src={item.imgSmall} alt="" />}
            {item.imgBig && <img style={styles.imgBig} src={item.imgBig} alt="" />}
          </div>
        );
      });
    }
  };

  render() {
    const { data, isShowShare } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.titleWrap}>
          <img style={styles.icon} src={require('@assets/Question/q.png')} alt="" />
          <div style={styles.title}>{data.ask}</div>
        </div>
        <div style={styles.infoWrap}>
          <img style={styles.icon} src={require('@assets/Question/a.png')} alt="" />
          <div style={styles.textItem}>{this.renderDetail()}</div>
        </div>
        <div style={styles.btnBox}>
          <div onClick={this.back} style={styles.btn}>
            返回
          </div>
          {/*
          {
            isShowShare && (
              <div onClick={this.toShare} style={{...styles.btn, ...styles.btnShare}}>分享</div>
            )
          }
          */}
        </div>
      </div>
    );
  }
}
