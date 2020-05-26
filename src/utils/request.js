import axios from 'axios';
import { Toast } from 'antd-mobile';
// const host = 'http://192.168.20.50:8080'
// const host = 'http://192.168.30.38:8080'
// const host = 'http://192.168.20.36:8080'
// const host = 'http://192.168.30.53:8080'
// const host = 'http://192.168.10.4:8080'
// const host = 'http://192.168.10.121:8080'
// const host = 'http://192.168.10.156:8080'
let host = '';
if (process.env.NODE_ENV === 'development') {
  host = 'https://testfamilyapi.vxiaoke360.com';
}
// const host = "https://familyapi.vxiaoke360.com";

axios.defaults.retry = 3; //  重试次数
axios.defaults.retryDelay = 100; // 重试延时
axios.defaults.shouldRetry = () => true; // 重试条件，默认只要是错误都需要重试
axios.interceptors.response.use(undefined, err => {
  const { config } = err;
  // 判断是否配置了重试
  if (!config || !config.retry) return Promise.reject(err);

  if (!config.shouldRetry || typeof config.shouldRetry !== 'function') {
    return Promise.reject(err);
  }

  // 判断是否满足重试条件
  if (!config.shouldRetry(err)) {
    return Promise.reject(err);
  }

  // 设置重置次数，默认为0
  config.retryCount = config.retryCount || 0;

  // 判断是否超过了重试次数
  if (config.retryCount >= config.retry) {
    return Promise.reject(err);
  }

  // 重试次数自增
  config.retryCount += 1;

  // 延时处理
  const backOff = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, config.retryDelay || 1);
  });

  // 重新发起axios请求
  return backOff.then(() => {
    return axios(config);
  });
});

export default async function Request(url, options = {}) {
  const { method = 'GET', headers, data } = options;
  const userInfo = localStorage.getItem('userInfo');

  const headData = JSON.parse(userInfo);
  console.log('headData', headData);
  const newHeaders = {
    ...headers,
    ...headData,
    ...{
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  let newOptions = {
    headers: newHeaders,
  };
  if (data) {
    newOptions = {
      ...newOptions,
      data: JSON.stringify(data),
    };
  }
  return new Promise(resolve => {
    axios({
      url: host + url,
      method,
      ...newOptions,
    })
      .then(({ data: responseJson }) => {
        // 拿到上面的转好的json
        if (responseJson.code === 200) {
          // 200为请求成功
          console.log(url, responseJson.data);
          resolve(responseJson.data);
        } else {
          resolve(responseJson);
          // 防止页面有Loading时请求报错后一直Loading
          Toast.hide();
          Toast.info(responseJson.msg);
        }
      })
      .catch(e => {
        console.log(e);
      });
  });
}
