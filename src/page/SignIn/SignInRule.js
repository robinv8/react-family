import React, { PureComponent } from 'react';

const fontFamilyNormal = 'PingFangSC-Regular';
const fontFamilyBold = 'PingFangSC-Medium';

const styles = {
  container: {
    padding: '24px 20px',
  },
  ruleBox: {
    marginBottom: '24px',
  },
  ruleTitle: {
    fontFamily: fontFamilyBold,
    fontSize: '16px',
    color: '#333',
    marginBottom: '10px',
  },
  ruleText: {
    fontFamily: fontFamilyNormal,
    fontSize: '12px',
    color: '#333',
    lineHeight: '24px',
    textIndent: '1em',
  },
};
export default class SignInRule extends PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.ruleBox}>
          <div style={styles.ruleTitle}>1.什么是米粒？</div>
          <div style={styles.ruleText}>米粒是米粒生活APP用户的专属积分</div>
        </div>
        <div style={styles.ruleBox}>
          <div style={styles.ruleTitle}>2.米粒有什么用途?</div>
          <div style={styles.ruleText}>用户可使用米粒进行抽奖，赢取各类大奖</div>
        </div>
        <div style={styles.ruleBox}>
          <div style={styles.ruleTitle}>3.获得米粒的方式如下</div>
          <div style={styles.ruleText}>
            <div>①新注册用户免费获得15米粒</div>
            <div>②每日签到赚取米粒</div>
            <div>③邀请好友注册成功获取米粒（每日最多获得3次）</div>
            <div>
              ④邀请的好友完成首购获得米粒（每日最多获得3次），确认收货后7天正式发放，如退款/退货，则自动收回
            </div>
            <div>
              ⑤在米粒生活APP下单购买商品获得米粒，确认收货后7天正式发放，如退款/退货，则自动收回
            </div>
          </div>
        </div>
        <div style={styles.ruleBox}>
          <div style={styles.ruleTitle}>4.米粒不可转让</div>
        </div>
        <div style={styles.ruleBox}>
          <div style={styles.ruleTitle}>5.本活动解释权归米粒生活所有</div>
        </div>
      </div>
    );
  }
}
