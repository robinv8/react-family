/* eslint-disable max-len */
import request from '../utils/request';

// 七牛授权
export async function getUploadToken() {
  return request(`/api/v1/storeReviewedInfo/get7NiuToken`);
}

// 信用卡金额
export async function creditCardMount() {
  return request(`/api/v1/activity/rebate/creditCard/amount`);
}

// 信用卡金额
export async function creditCardList(page) {
  return request(`/api/v1/activity/rebate/creditCard/list?curPage=${page}&pageSize=10`);
}

// 一元购商品列表
export async function getOneYuanProduct() {
  return request(`/api/v1/tbkCashLift/list`);
}

// 点击商品跳转到淘宝，接口返回淘宝地址
export async function getOneYuanProductUrl(id) {
  return request(`/api/v1/tbkCashLift/check?id=${id}`);
}

// 店主权益
export function getRights() {
  return request('/api/v1/user/agent/interests');
}

// 获取验证码
export function getVerificationCode(mobile, isExperience) {
  return request(`/api/v1/storeReviewedInfo/send?mobile=${mobile}&isExperience=${isExperience}`);
}

// 店长直升提交
export function getRiseFormSubmit(params) {
  return request(`/api/v1/storeReviewedInfo/apply`, {
    method: 'POST',
    data: params,
  });
}

// 省市数据
export function getCityData() {
  return request(`/api/v1/area/list`);
}

// 获取邀请人信息
export function getInvitationInfo(params) {
  return request(`/api/v1/storeReviewedInfo/getInvitationUserInfo?invitationId=${params}`);
}

// 获取行业信息
export function getIndustry() {
  return request(`/api/v1/storeReviewedInfo/storeIndustry`);
}

export function getAddress(location) {
  return request(`/api/v1/storeReviewedInfo/getAddress?location=${location}`);
}

// 支付宝拉新活动
export function getTotal() {
  return request('/api/v1/pullNewMemberRebate/incentiveStatistics');
}

export function getTbUrl() {
  return request('/api/v1/tbPullNewMember/receiveUrl');
}

export function getZfbUrl() {
  return request('/api/v1/tbPullNewMember/aliPayReceiveUrl');
}

export function getPersonalCode(params) {
  return request(`/api/v1/user/agent/person/apply/sms`, {
    method: 'POST',
    data: params,
  });
}

export function getBasicsCode(params) {
  return request(`/api/v1/user/agent/basics/apply/sms`, {
    method: 'POST',
    data: params,
  });
}

export function getCityCode(params) {
  return request(`/api/v1/user/agent/city/apply/sms`, {
    method: 'POST',
    data: params,
  });
}

// 门店信息管理表单提交
export function getshopFormSubmit(params) {
  return request(`/api/v1/store/save`, {
    method: 'POST',
    data: params,
  });
}

// 门店信息回显
export function getshopFormDetail() {
  return request(`/api/v1/store/getDetail`);
}

// 省市
export function getProvince() {
  return request(`/api/v1/sz/provinces`);
}

// 善诊免费领取
export function freeGet(params) {
  return request(`/api/v1/sz/isExistCity?areaId=${params}`);
}

export function getServiceRiseFormSubmit(params) {
  return request(`/api/v1/user/agent/apply`, {
    method: 'POST',
    data: params,
  });
}

// 渠道投放提交
export function getCastFormSubmit(params) {
  return request(`/api/v1/provider/h5-apply`, {
    method: 'POST',
    data: params,
  });
}

// 获取渠道投放验证码
export function getCastFormCode(params) {
  return request(`/api/v1/provider/sendSvc`, {
    method: 'POST',
    data: params,
  });
}

// 新人专区列表
export function getNewPeopleProduct(params) {
  return request(`/new/activity/v2/products?pageNo=${params}&pageSize=10`);
}

// 新人专区倒计时
export function getNewPeopleTime() {
  return request(`/new/activity/config`);
}

export function checkVersion() {
  return request(`/new/activity/checkout`);
}

export function getNewPeopleCheck(params) {
  return request(`/new/activity/validStoreProduct?id=${params}`);
}

// 红包列表
export function redEnvelopesList(params) {
  return request(`/api/v1/redPacket/list?current=${params}&size=10`);
}

// 折红包
export function openRedEnvelopes(params) {
  return request(`/api/v1/redPacket/demolition?redId=${params}`);
}

// 拆红包列表
export function getList(params) {
  return request(`/api/v1/redPacket/rank?current=${params}&size=10`);
}

// 红包数量
export function redEnvelopesCount() {
  return request(`/api/v1/redPacket/count`);
}

// 红包弹幕
export function getBarrage() {
  return request(`/api/v1/redPacket/barrage`);
}

// 视频列表
export function getVideoList(params) {
  return request(
    `/community-multi-media/videos?tagId=${params.videoId}&currentPage=${params.currentPage}`,
  );
}

// 签到
export function getSignIn() {
  return request(`/api/v1/user/signArrival/start`);
}

// 获取签到信息
export function getSignInInfo() {
  return request(`/api/v1/goldrice/detail`);
}

// 领取米粒
export function getCoin(params) {
  return request(`/api/v1/goldrice/pick?type=${params}`);
}

// 金米粒金额
export function getCoinCount() {
  return request(`/api/v1/goldrice/totalGoldRiceNum`);
}

// 米粒明细
export function getSignDetail(params) {
  return request(
    `/api/v1/goldrice/detail/list?status=${params.status}&pageNo=${params.pageNo}&pageSize=10`,
  );
}

// 未完成首购好友
export function getSignInFriends() {
  return request(`/api/v1/goldrice/noPurchaseFriends`);
}

// 抽奖
export function lotteryStart() {
  return request(`/api/v1/lottery/start`);
}

/**
 * @description 抽奖明细
 * @param pageNo 当前页
 * @param pageSize 页大小
 */
export function lotteryDetail(pageNo, pageSize = 10) {
  return request(`/api/v1/lottery/list?pageNo=${pageNo}&pageSize=${pageSize}`);
}

// 抽奖弹幕
export function lotteryBullet() {
  return request('/api/v1/lottery/barrages');
}

// 获取服务商信息
export function getServiceInfo() {
  return request(`/api/v1/user/agent/experience/store/info`);
}

// 淘宝商品详情
export function getTBProDetail(params) {
  return request(`/api/v1/product/h5/detail?id=${params.pid}&shareUserId=${params.shareUserId}`);
}

// 淘宝店铺商品详情
export function getTBStoreDetail(params) {
  return request(`/api/v1/product/shopInfo?shopTitle=${params}`);
}

// 淘宝店铺评分
export function getStoreScore(params) {
  return request(`/api/v1/product/detailPeriphery?id=${params}`);
}

// 淘宝店铺商品详情图文
export function getTBProDetailInfo(params) {
  return request(`/api/v1/product/desc?productId=${params}`);
}

export function getFormSubmit(params) {
  return request(`/api/v1/provider/h5-apply`, {
    method: 'POST',
    data: params,
  });
}

export function refreshUserInfo() {
  return request('/api/v1/user/getUserInfo');
}

// 加油列表
export function getOilList(params) {
  return request(`/api/v1/czb365/gas/info/queryPriceByPhone`, {
    method: 'POST',
    data: params,
  });
}

// 获取加油站支付页面
export function getBuyOilUrl(params) {
  return request('/api/v1/czb365/gas/info/getPayUrl', {
    method: 'POST',
    data: params,
  });
}

// 加油详情接口
export function getOilDetail(params) {
  return request(
    `/api/v1/czb365/gas/info/getGasDetail?gasId=${params.gasId}&location=${params.location}`,
  );
}

/**
 * @description 查询车主邦订单列表
 * @param {Number} pageNo
 * @param {Number} pageSize
 */
export function gasInfoOrderList(pageNo = 1, pageSize = 10) {
  return request(`/api/v1/czb365/gas/info/order/list`, {
    method: 'POST',
    data: {
      pageNo,
      pageSize,
    },
  });
}
// 获取加油订单详情
export function getOilOrderDetail(id = '') {
  return request(`/api/v1/czb365/gas/info/order/detail?orderId=${id}`);
}

// 获取饿了么链接

export function getElementUrl() {
  return request('/api/v1/activity/ele');
}
