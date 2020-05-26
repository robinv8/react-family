import React, { PureComponent } from 'react';

const styles = {
  content: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '23px 12px 20px',
    background: '#fff',
  },
  titleWrap: {
    position: 'relative',
    width: '180px',
    margin: '0 auto 23px',
  },
  titleBg: {
    width: '100%',
    height: '100%',
  },
  titleText: {
    position: 'absolute',
    top: '9px',
    left: 0,
    width: '100%',
    fontSize: '16px',
    fontFamily: 'PingFangSC-Medium',
    color: '#fff',
    lineHeight: '16px',
    textAlign: 'center',
  },
  h1: {
    fontSize: '16px',
    fontFamily: 'PingFangSC-Medium',
    color: '#333',
    marginBottom: '12px',
  },
  h2: {
    fontSize: '14px',
    fontFamily: 'PingFangSC-Medium',
    color: '#333',
    lineHeight: '22px',
    marginBottom: '6px',
  },
  textBox: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 4px',
    lineHeight: '22px',
    marginBottom: '12px',
  },
  item: {
    fontSize: '14px',
    fontFamily: 'PingFangSC-Regular',
    color: '#333',
    lineHeight: '22px',
    marginBottom: '6px',
  },
};
export default class Rule extends PureComponent {
  render() {
    return (
      <div style={styles.content}>
        <div style={styles.titleWrap}>
          <img style={styles.titleBg} src={require('@assets/Alipay/r-title.png')} alt="" />
          <div style={styles.titleText}>活动规则</div>
        </div>

        <div style={styles.h1}>一、邀请的新用户需要满足以下条件：</div>
        <div style={styles.textBox}>
          <div style={styles.h2}>淘宝新用户定义：</div>
          <div style={styles.item}>
            1、通过米粒生活下载手机淘宝，第一次登录手机淘宝的用户，包括之前只在PC、H5页面登录未在手机淘宝的用户，包括之前只在PC、H5页面登录未在手机淘宝
          </div>
          <div style={styles.item}>
            2、新用户登录手机淘宝并在1小时以内，在指定页面领取到新人权益，才算有效新用户。
          </div>
          <div style={styles.item}>
            3、新用户在指定页面领取到新人权益以后，必须在72小时内登录手机淘宝，才可以激活权益。
          </div>
        </div>

        <div style={styles.textBox}>
          <div style={styles.h2}>支付宝新用户定义：</div>
          <div style={styles.item}>
            1、通过米粒生活下载注册支付宝，完成注册登录的新用户，包括之前在PC、H5、手机淘宝登录过但未在支付宝客户端登录的用户。
          </div>
          <div style={styles.item}>
            2、绑卡要求：有效支付宝新用户，登录支付宝客户端在96小时内首次完成绑定银行卡。
          </div>
        </div>

        <div style={styles.h1}>二、奖励政策</div>
        <div style={styles.textBox}>
          <div style={styles.item}>
            1、每邀请1个新用户下载手机淘宝并完成首单，邀请人立得10元现金奖励；
          </div>
          <div style={styles.item}>
            2、引导新用户完成淘宝绑定银行卡，邀请人继续得20元现金奖励。淘宝新用户可在淘宝领取新人专属10元红包。
          </div>
          <div style={styles.item}>
            3、每邀请1个新用户下载支付宝领取新人红包，邀请人立得20元现金奖励；
          </div>
          <div style={styles.item}>
            4、引导新用户在注册后96小时内完成支付宝绑定银行卡，邀请人继续得20元现金奖励。支付宝新用户可领取8-99元现金红包。
          </div>
        </div>

        <div style={styles.h1}>三、奖励到账时间</div>
        <div style={styles.textBox}>
          <div style={styles.item}>
            次日奖励到账待审核，次月25日统一结算当月确认收货的邀请奖励。
          </div>
        </div>

        <div style={styles.h1}>四、其他问题</div>
        <div style={styles.textBox}>
          <div style={styles.item}>
            如果出现任何违规行为(如作弊、
            恶意套现、虚假交易等)，一经发现，米粒生活有权视行为严重程度采取取消活动参与资格、取消或回扣补贴奖金等措施，必要时追究、法律责任。
          </div>
        </div>
      </div>
    );
  }
}
