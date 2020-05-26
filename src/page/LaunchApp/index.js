import React from 'react';
import CallApp from 'callapp-lib';
import queryString from 'query-string';

const param = queryString.parse(window.location.search);

export default class Empty extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    this.type = Number(match.params.type) || 0;

    const options = {
      scheme: {
        protocol: 'mili',
      },
      appstore: 'https://apps.apple.com/cn/app/%E7%B1%B3%E7%B2%92%E7%94%9F%E6%B4%BB/id1447328945',
      yingyongbao: 'https://a.app.qq.com/o/simple.jsp?pkgname=com.vxiaoke.ricelife.app',
      fallback: 'https://a.app.qq.com/o/simple.jsp?pkgname=com.vxiaoke.ricelife.app',
      timeout: 4000,
    };
    const callLib = new CallApp(options);
    // window.location.href = 'mili://com.vxiaoke.ricefile?storeId=5406451855466752';
    callLib.open({
      param,
      path: 'com.vxiaoke.ricefile',
    });
  }

  render() {
    return <div />;
  }
}
