import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getQueryString } from '../../utils/tools';
import UpFormalModal from '../../components/StoreIntroduce/UpFormalModal';
import { getServiceInfo } from '../../service/api';

const styles = {
  insiderContainer: {
    position: 'relative',
  },
  Img: {
    width: '100%',
    verticalAlign: 'bottom',
  },
  btnWap: {
    padding: '0 15px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    boxSizing: 'border-box',
  },
  bottomBtn: {
    height: '48px',
    lineHeight: '48px',
    marginBottom: '20px',
    backgroundImage: 'linear-gradient(0deg, #FF6900 0%, #FF8300 100%)',
    textAlign: 'center',
    borderRadius: '6px',
    fontSize: '18px',
    color: '#fff',
    fontFamily: 'PingFangSC-Medium',
    display: 'block',
    boxShadow: '0 3px 6px 0 rgba(177,94,1,0.50)',
  },
};
export default class storeIntroduce extends Component {
  state = {
    isApp: false,
    isUpFormalModal: false,
    data: {},
  };

  componentDidMount() {
    const isApp = !!getQueryString('isApp');
    this.setState({
      isApp,
    });
    this.getServiceInfo();
  }

  goUp = () => {
    const params = {
      isVerifity: true,
      isJump: true,
      jumpInfo: {
        routeName: 'WebView',
        params: {
          title: '店长直升通道',
          src: `${window.document.activeH5Url}/shopkeeperRise`,
          disabledReload: true,
        },
      },
    };
    window.postMessage(JSON.stringify(params));
  };

  timestamp = url => {
    const getTimestamp = new Date().getTime();
    url = `${url}?timestamp=${getTimestamp}`;
    return url;
  };

  handleFormal = boo => {
    this.setState({
      isUpFormalModal: boo,
    });
  };

  /**
   * 接口请求
   */
  async getServiceInfo() {
    const res = await getServiceInfo();

    if (res && !res.msg) {
      this.setState({
        data: res,
      });
    }
  }

  renderBtn = () => {
    const { isApp, data } = this.state;
    // 体验版店长身份
    if (data.isExperienceStore) {
      return (
        <div style={styles.bottomBtn} onClick={() => this.handleFormal(true)}>
          升级正式版
        </div>
      );
    }
    // 普通身份
    if (isApp) {
      return (
        <div style={styles.bottomBtn} onClick={() => this.goUp()}>
          店长直升通道
        </div>
      );
    }
    return (
      <Link to="/shopkeeperRise" style={styles.bottomBtn}>
        店长直升通道
      </Link>
    );
  };

  render() {
    const { isUpFormalModal, data } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.insiderContainer}>
          <img
            style={styles.Img}
            src={this.timestamp('https://image.vxiaoke360.com/storeintroduce-img1.png')}
            alt=""
          />
          <img
            style={styles.Img}
            src={this.timestamp('https://image.vxiaoke360.com/storeintroduce-img2.png')}
            alt=""
          />
          <img
            style={styles.Img}
            src={this.timestamp('https://image.vxiaoke360.com/storeintroduce-img3.png')}
            alt=""
          />
          <div style={styles.btnWap}>{this.renderBtn()}</div>
        </div>
        <UpFormalModal
          data={data}
          isUpFormalModal={isUpFormalModal}
          handleFormal={this.handleFormal}
        />
      </div>
    );
  }
}
