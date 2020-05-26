import { Component } from "react";
import { withRouter } from "react-router-dom";
import { getQueryString } from "./utils/tools";
import { refreshUserInfo } from "./service/api";
// import SoulPigeon from '@utils/main';
// SoulPigeon.appKey = 'e075bbd4-8658-4c18-ad23-ca27cd9222e7';
// if (window.location.host.indexOf('activity') !== 0) {
//   SoulPigeon.host = 'https://testsoulpigeonapi.vxiaoke360.com';
// } else {
//   SoulPigeon.host = 'https://soulpigeonapi.vxiaoke360.com';
// }

class App extends Component {
  constructor(props) {
    super(props);
    console.log("2122222222");
    const { history } = props;
    switch (history.location.pathname) {
      case "/shopkeeperRise":
        document.title = "店长直升";
        break;
      case "/cityRise":
        document.title = "城市服务商直升通道";
        break;
      case "/ownerRise":
        document.title = "基础服务商直升通道";
        break;
      case "/shopManage":
        document.title = "店铺管理";
        break;
      case "/shanzhen":
        document.title = "体检福利";
        break;
      case "/shanzhenStep":
        document.title = "体检福利";
        break;
      case "/jstAbout":
        document.title = "讲商堂";
        break;
      default:
        document.title = "米粒生活";
        break;
    }
  }

  componentWillMount() {
    // if (getQueryString('from')) {
    //   console.log('test');
    //   const url = window.location.href.split('?')[0];
    //   const hasFrom = window.location.href.split('?')[1];
    //   const params = hasFrom.split('#')[1];
    //   window.location.replace(`${url}#${params}`);
    // }
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user || !user.token || getQueryString("token")) {
      const info = {
        token: getQueryString("token") || "",
        deviceId: getQueryString("deviceId") || "1d37738a2ce9b39b",
        platform: getQueryString("token") ? getQueryString("platform") : 3,
        deviceModel: getQueryString("deviceModel") || 1,
        deviceBrand: getQueryString("deviceBrand") || navigator.platform,
        userAgent: getQueryString("userAgent") || navigator.userAgent,
        version: getQueryString("version"),
      };
      localStorage.setItem("userInfo", JSON.stringify(info));
    }

    const user2 = JSON.parse(localStorage.getItem("userInfo"));
    // //获取用户ID,方便埋点数据分析
    // if (user2 && user2.userId) {
    //   SoulPigeon.init();
    // } else if (getQueryString("token")) {
    //   refreshUserInfo().then(({ userId = "" } = {}) => {
    //     const user3 = JSON.parse(localStorage.getItem("userInfo"));
    //     if (userId) {
    //       user3.userId = userId;
    //       localStorage.setItem("userInfo", JSON.stringify(user3));
    //       SoulPigeon.init();
    //     }
    //   });
    // } else {
    //   SoulPigeon.init();
    // }

    const inviteCode = getQueryString("invitationCode");
    localStorage.setItem("inviteCode", JSON.stringify(inviteCode));

    // 活动h5域名
    const url = window.location.origin;
    window.document.activeH5Url = url;

    /* try {
      this.awaitPostMessage();
      window.postMessage = msg => {
        console.log('postmessage消息内容', String(msg));
        document.location = `app://rilelife.com?${String(msg)}`;
      };
    } catch (e) {
      console.log(e);
    } */
  }

  awaitPostMessage = () => {
    let isReactNativePostMessageReady = !!window.originalPostMessage;
    const queue = [];
    let currentPostMessageFn = function store(message) {
      if (queue.length > 100) queue.shift();
      queue.push(message);
    };
    if (!isReactNativePostMessageReady) {
      const originalPostMessage = window.postMessage;
      Object.defineProperty(window, "postMessage", {
        configurable: true,
        enumerable: true,
        get() {
          return currentPostMessageFn;
        },
        set(fn) {
          currentPostMessageFn = fn;
          isReactNativePostMessageReady = true;
          setTimeout(sendQueue, 0);
        },
      });
      window.postMessage.toString = function () {
        return String(originalPostMessage);
      };
    }

    function sendQueue() {
      while (queue.length > 0) window.postMessage(queue.shift());
    }
  };

  render() {
    const { children } = this.props;
    return children;
  }
}
export default withRouter(App);
