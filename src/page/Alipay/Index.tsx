import React, { Component } from 'react';
import { getTotal, getZfbUrl, getTbUrl } from '../../service/api';
import { getQueryString } from '../../utils/tools';
import AlipayShare from './components/AlipayShare';
const styles = {
  container: {
    width: '100%',
    background: 'rgb(251, 58, 9)',
  },
};
declare global {
  interface Document {
    activeH5Url: string;
  }
}
export default class Index extends Component {
  state = {
    isApp: false,
    h5Url: [
      {
        url: `${window.document.activeH5Url}/alipayRule`,
        type: 1,
        title: '活动规则',
        id: '',
      },
      {
        url: `${window.document.activeH5Url}/AlipayShareStep`,
        type: 1,
        title: '拿70元攻略',
        id: '',
      },
    ],
    moneyInfo: [],
    tbUrl: {},
    zfbUrl: {},
  };

  needAuth = false;

  componentDidMount() {
    const isApp = !!getQueryString('isApp');
    this.setState({
      isApp,
    });
    this.getTotalMount();
    this.getUrls();
    this.getZfbUrls();
    const datas = {
      type: 'zfb',
      url:
        'https://android.myapp.com/myapp/detail.htm?apkName=com.vxiaoke.ricelife.app&ADTAG=mobile',
      tkl: `邀请您加入米粒生活，新人立享淘宝、支付宝、米粒三重0元购！\n-------------\n下载链接：https://android.myapp.com/myapp/detail.htm?apkName=com.vxiaoke.ricelife.app&ADTAG=mobile\n邀请码：`,
      shareTitle: '米粒生活',
      shareDesc: `来米粒生活\n每天都是双十一`,
      showShare: false,
    };
    setTimeout(() => {
      window.postMessage(JSON.stringify(datas), '*');
    }, 200);
  }

  pressShare = () => {
    if (this.needAuth) {
      const params = {
        needAuth: true,
      };
      window.postMessage(JSON.stringify(params), '*');
      return;
    }
    const datas = {
      type: 'zfb',
      url: 'https://www.vxiaoke360.com/H5/mlsh-download/index.html',
      tkl: `邀请您加入米粒生活，新人立享淘宝、支付宝、米粒三重0元购！\n-------------\n下载链接：https://www.vxiaoke360.com/H5/mlsh-download/index.html\n邀请码：`,
      shareTitle: '米粒生活',
      shareDesc: `来米粒生活\n每天都是双十一`,
      showShare: true,
    };
    setTimeout(() => {
      window.postMessage(JSON.stringify(datas), '*');
    }, 200);
  };

  jumpPage = (item: any) => {
    if (this.needAuth) {
      const datas = {
        needAuth: true,
      };
      window.postMessage(JSON.stringify(datas), '*');
      return;
    }
    const params = {
      info: item,
      type: 'jumpPage',
    };
    window.postMessage(JSON.stringify(params), '*');
  };

  async getTotalMount() {
    const res = await getTotal();
    if (res && res.length) {
      this.setState({
        moneyInfo: res,
      });
      this.needAuth = false;
    }
    if (res.code === 1000) {
      this.needAuth = true;
    }
  }

  async getUrls() {
    const res = await getTbUrl();
    if (res && res.code !== 1000) {
      this.needAuth = false;
      this.setState({
        tbUrl: {
          url: res.receiveUrl,
          type: 1,
          title: '淘宝新人福利',
          id: '',
          onlyUrl: true,
          jumpTb: true,
        },
      });
    }
    if (res.code === 1000) {
      this.needAuth = true;
    }
  }

  async getZfbUrls() {
    const res = await getZfbUrl();
    if (res && res.code !== 1000) {
      this.needAuth = false;
      this.setState({
        zfbUrl: {
          url: res.receiveUrl,
          type: 1,
          title: '支付宝新人福利',
          id: '',
          onlyUrl: true,
          jumpTb: true,
        },
      });
    }
    if (res.code === 1000) {
      this.needAuth = true;
    }
  }

  render() {
    const { isApp, h5Url, moneyInfo, tbUrl, zfbUrl } = this.state;
    return (
      <div style={styles.container}>
        <AlipayShare
          isApp={isApp}
          h5Url={h5Url}
          moneyInfo={moneyInfo}
          tbUrl={tbUrl}
          zfbUrl={zfbUrl}
          jumpPage={this.jumpPage}
          pressShare={this.pressShare}
        />
      </div>
    );
  }
}
