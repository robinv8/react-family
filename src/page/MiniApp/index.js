import React from 'react';
import { getQueryString } from '../../utils/tools';
import qs from 'qs';
export default class Empty extends React.PureComponent {
  componentWillMount() {
    const type = getQueryString('type');
    const appId = getQueryString('appId');
    const queryParam = getQueryString('queryParam');
    const newParams = decodeURIComponent(queryParam);
    const prefix = `alipays://platformapi/startapp?appId=${appId}`;
    //type:0 我的红包，1 积分兑换({"type":0})  2 消费记录 {"type":2})
    const isJSON = this.isJSON(newParams);
    let params = {};
    if (isJSON) {
      params = JSON.parse(newParams);
    }
    // eslint-disable-next-line default-case
    switch (Number(type)) {
      case 0:
        window.location.href = `${prefix}&page=pages/Shop/RedList/index${encodeURIComponent(
          `?${qs.stringify(params)}`,
        )}`;
        break;
      case 1:
        window.location.href = `${prefix}&page=pages/Member/Info/index${encodeURIComponent(
          `?type=0&${qs.stringify(params)}`,
        )}`;
        break;
      case 2:
        window.location.href = `${prefix}&page=pages/Member/Info/index${encodeURIComponent(
          `?type=2&${qs.stringify(params)}`,
        )}`;
        break;
      case 3:
        window.location.href = `${prefix}&page=pages/Shop/ShopIndex/index${encodeURIComponent(
          `?${qs.stringify(params)}`,
        )}`;
        break;
      case 4:
        window.location.href = `${prefix}&page=pages/Home/index${encodeURIComponent(
          `?${qs.stringify(params)}`,
        )}`;
        break;
      case 5:
        window.location.href = `${prefix}&page=pages/Red/index${encodeURIComponent(
          `?${qs.stringify(params)}`,
        )}`;
        break;
    }
  }
  isJSON(str) {
    if (typeof str == 'string') {
      try {
        JSON.parse(str);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  }
  render() {
    return null;
  }
}
