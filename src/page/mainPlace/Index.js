import React from 'react';

export default class Test extends React.Component {
  componentDidMount() {
    const mobileType = navigator.userAgent;
    const isAndroid = mobileType.indexOf('Android') > -1 || mobileType.indexOf('Linux') > -1;
    if (isAndroid) {
      window.addEventListener('message', e => {
        const message = e.data;
        if (message.loadFinish) {
          this.onLaunchApp();
        }
      });
    } else {
      window.addEventListener('message', e => {
        const message = JSON.parse(e.data);
        if (message.loadFinish) {
          this.onLaunchApp();
        }
      });
    }
  }

  onLaunchApp = () => {
    const params = {
      isVerifity: true,
      isJump: true,
      jumpInfo: {
        type: 'TB',
        url: 'https://s.click.taobao.com/t9tM4yv',
      },
    };
    setTimeout(() => {
      window.postMessage(JSON.stringify({ jumpTb: true }));
      window.postMessage(JSON.stringify(params));
    }, 200);
    const data = {
      isVerifity: true,
      isPop: true,
    };
    setTimeout(() => {
      window.postMessage(JSON.stringify(data));
    }, 1200);
  };

  jumpPage = () => {
    console.log('0');
  };

  render() {
    return (
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    );
  }
}
