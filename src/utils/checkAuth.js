import { versionToNum } from './tools';

export default async function checkAuth(params) {
  console.log('检查授权信息', params);
  if (versionToNum(params.version) < versionToNum('2.8.0')) {
    console.log('不用走检查权限', versionToNum(params.version), versionToNum('2.8.0'));
    return true;
  }

  let data = {
    isVerifity: true,
    isAuthentication: true, // 是否进行鉴权处理
  };
  // 淘宝授权
  if (params.tbAuth == 0) {
    console.log('淘宝授权');
    const authInfo = {
      isTBAuth: true,
    };
    data.authInfo = authInfo;
    setTimeout(() => {
      window.postMessage(JSON.stringify(data));
    }, 200);
    return false;
  }
  // 百川授权
  if (params.bcLogin == 0) {
    console.log('百川授权');
    const authInfo = {
      isBCLogin: true,
    };
    data.authInfo = authInfo;
    setTimeout(() => {
      window.postMessage(JSON.stringify(data));
    }, 200);
    return false;
  }
  // 登录
  if (params.accountLogin == 0) {
    console.log('登录授权');
    const authInfo = {
      isNeedLogin: true,
    };
    data.authInfo = authInfo;
    setTimeout(() => {
      window.postMessage(JSON.stringify(data));
    }, 200);
    return false;
  }
  return true;
}
