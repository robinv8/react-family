/*
 * @Description:
 * @Date: 2020-03-09 11:04:03
 * @Author:
 * @LastEditors: robin
 * @LastEditTime: 2020-03-09 14:04:06
 */
import React from 'react';
import { Link } from 'react-router-dom';
import * as CSS from 'csstype';
interface Style extends CSS.Properties, CSS.PropertiesHyphen {}
const styles: { [propName: string]: Style } = {
  flexSpace: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headWrap: {
    position: 'relative',
    width: '100%',
  },
  head: {
    width: '100%',
    height: '385px',
    display: 'block',
  },
  rule: {
    width: '50px',
    height: '47px',
    position: 'absolute',
    top: 0,
    right: '20px',
  },
  timeWrap: {
    width: '220px',
    height: '28px',
    position: 'absolute',
    bottom: '15px',
    left: 0,
    right: 0,
    margin: '0 auto',
    background: 'rgba(255,118,78,1)',
    borderRadius: '14px',
    fontSize: '12px',
    lineHeight: '28px',
    color: '#fff',
    textAlign: 'center',
  },
  stepWrap: {
    position: 'relative',
    width: '100%',
  },
  step: {
    width: '100%',
    height: '253px',
    display: 'block',
  },
  step2: {
    height: '150px',
  },
  step3: {
    height: '205px',
  },
  step4: {
    height: '370px',
  },
  stepInfo: {
    width: '57%',
    height: '56px',
    position: 'absolute',
    top: '56px',
    right: '28px',
    fontSize: '12px',
    color: '#333',
    lineHeight: '20px',
  },
  stepInfo9: {
    top: '48px',
  },
  textRed: {
    color: '#FF2100',
    fontSize: '13px',
    fontFamily: 'PingFangSC-Semibold',
  },
  btnWrap: {
    width: '100%',
    boxSizing: 'border-box',
    position: 'absolute',
    top: '134px',
    left: 0,
    padding: '0 8%',
    justifyContent: 'space-between',
  },
  btnWrap2: {
    top: '135px',
  },
  btns: {
    width: '48%',
    height: '44px',
    borderRadius: '6px',
    textAlign: 'center',
    lineHeight: '44px',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '15px',
    color: '#fff',
  },
  btn1: {
    background: 'linear-gradient(0deg,rgba(111,64,249,1),rgba(194,106,255,1))',
  },
  btn2: {
    background: 'linear-gradient(0deg, rgba(255,99,23,1), rgba(255,192,41,1))',
  },
  stepInfo2: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 8%',
    top: '191px',
    left: 0,
  },
  btnImg: {
    width: '100%',
    height: '90px',
    display: 'block',
  },
  moneyWrap: {
    width: '100%',
    height: '221px',
    boxSizing: 'border-box',
    padding: '0 3%',
    position: 'absolute',
    top: '48px',
    left: 0,
    display: 'flex',
    alignItems: 'center',
  },
  moneyLeft: {
    width: '34%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(250,41,10, 0.05)',
    marginRight: '2px',
  },
  redBig: {
    fontSize: '30px',
    color: '#FF2100',
    fontFamily: 'PingFangSC-Medium',
  },
  redSmall: {
    fontSize: '14px',
  },
  moneyInfo: {
    display: 'flex',
    fontSize: '12px',
    color: '#666',
    fontFamily: 'PingFangSC-Medium',
  },
  moneyInfo2: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 14px',
    lineHeight: '18px',
  },
  coin: {
    width: '16px',
    height: ' 16px',
    marginRight: '4px',
  },
  moneyMiddle: {
    width: '30%',
    height: '100%',
    marginRight: '1.5px',
  },
  middleItem: {
    width: '100%',
    height: '110px',
    marginBottom: '1.5px',
    background: 'rgba(250,41,10, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moneyRight: {
    display: 'flex',
    flex: 1,
    height: '100%',
    flexDirection: 'column',
  },
  moneyText: {
    width: '100%',
    position: 'absolute',
    bottom: '40px',
    left: 0,
    padding: '0 34px',
    fontFamily: ' PingFangSC-Regular',
    color: '#666',
    fontSize: '12',
    boxSizing: 'border-box',
  },
  bottomBtn: {},
};
interface Props {
  isApp: boolean;
  h5Url: Array<{
    url: string;
    type: number;
    title: string;
    id: string;
  }>;
  moneyInfo: any;
  tbUrl: {
    [propName: string]: any;
  };
  zfbUrl: {
    [propName: string]: any;
  };
  jumpPage: Function;
  pressShare: Function;
}
export default ({ isApp, h5Url, moneyInfo, tbUrl, zfbUrl, jumpPage, pressShare }: Props) => {
  return (
    <>
      <div style={styles.headWrap}>
        <img style={styles.head} src={require('@assets/Alipay/head.png')} alt="" />
        {isApp ? (
          <img
            style={styles.rule}
            src={require('@assets/Alipay/rule.png')}
            alt=""
            onClick={() => jumpPage(h5Url[0])}
          />
        ) : (
          <Link to="/alipayRule" style={styles.bottomBtn}>
            <img style={styles.rule} src={require('@assets/Alipay/rule.png')} alt="" />
          </Link>
        )}
        {/* <div style={styles.timeWrap}>
          活动时间：5月1日 ～ 5月31日
          </div> */}
      </div>

      <div style={styles.stepWrap}>
        <img style={styles.step} src={require('@assets/Alipay/step1.png')} alt="" />
        <div style={styles.stepInfo}>
          邀新用户通过米粒生活在该页面领取新人专属10元淘宝红包，并完成淘宝首单,邀请人立得
          <span style={styles.textRed}>10元现金！</span>
        </div>
        <div style={{ ...styles.flexSpace, ...styles.btnWrap }}>
          <div style={{ ...styles.btns, ...styles.btn1 }} onClick={() => pressShare()}>
            分享邀请海报
          </div>
          <div style={{ ...styles.btns, ...styles.btn2 }} onClick={() => jumpPage(tbUrl)}>
            新人领淘宝红包
          </div>
        </div>

        <div style={{ ...styles.stepInfo, ...styles.stepInfo2 }}>
          新用户必须在登录淘宝1小时内领取新人红包，并在72小时内完成首单才算有效新用户。
        </div>
      </div>

      <div style={styles.stepWrap}>
        <img
          style={{ ...styles.step, ...styles.step2 }}
          src={require('@assets/Alipay/step2.png')}
          alt=""
        />
        <div style={styles.stepInfo}>
          邀新用户下载支付宝,
          <span style={styles.textRed}>选择淘宝账号登录</span>
          ,领取新人专享8-99元支付宝红包,邀请人立得
          <span style={styles.textRed}>20元现金！</span>
        </div>
      </div>

      <div style={styles.stepWrap}>
        <img
          style={{ ...styles.step, ...styles.step3 }}
          src={require('@assets/Alipay/step3.png')}
          alt=""
        />
        <div style={{ ...styles.stepInfo, ...styles.stepInfo9 }}>
          新用户注册支付宝96小时内,完成支付宝绑定银行卡,邀请人再得
          <span style={{ ...styles.textRed }}>淘宝绑卡20元现金+支付宝绑卡20元现金！</span>
        </div>
        <div style={{ ...styles.flexSpace, ...styles.btnWrap, ...styles.btnWrap2 }}>
          <div style={{ ...styles.btns, ...styles.btn1 }} onClick={() => pressShare()}>
            分享邀请海报
          </div>
          <div style={{ ...styles.btns, ...styles.btn2 }} onClick={() => jumpPage(zfbUrl)}>
            新人领支付宝红包
          </div>
        </div>
      </div>

      {isApp ? (
        <img
          style={styles.btnImg}
          src={require('@assets/Alipay/btn.png')}
          alt=""
          onClick={() => jumpPage(h5Url[1])}
        />
      ) : (
        <Link to="/alipayShareStep" style={styles.btnImg}>
          <img style={styles.btnImg} src={require('@assets/Alipay/btn.png')} alt="" />
        </Link>
      )}

      <div style={styles.stepWrap}>
        <img
          style={{ ...styles.step, ...styles.step4 }}
          src={require('@assets/Alipay/step4.png')}
          alt=""
        />

        <div style={styles.moneyWrap}>
          <div style={styles.moneyLeft}>
            <div style={styles.redBig}>
              {moneyInfo[0] || 0}
              <span style={styles.redSmall}>元</span>
            </div>
            <div style={styles.moneyInfo}>
              <img style={styles.coin} src={require('@assets/Alipay/coin.png')} alt="" />
              <div>累计奖励</div>
            </div>
          </div>

          <div style={styles.moneyMiddle}>
            <div style={styles.middleItem}>
              <div style={styles.redBig}>
                {moneyInfo[1] || 0}
                <span style={styles.redSmall}>元</span>
              </div>
              <div style={{ ...styles.moneyInfo, ...styles.moneyInfo2 }}>
                <img style={styles.coin} src={require('@assets/Alipay/coin.png')} alt="" />
                <div>邀好友下载淘宝奖励</div>
              </div>
            </div>

            <div style={styles.middleItem}>
              <div style={styles.redBig}>
                {moneyInfo[3] || 0}
                <span style={styles.redSmall}>元</span>
              </div>
              <div style={{ ...styles.moneyInfo, ...styles.moneyInfo2 }}>
                <img style={styles.coin} src={require('@assets/Alipay/coin.png')} alt="" />
                <div>邀好友下载 支付宝奖励</div>
              </div>
            </div>
          </div>

          <div style={styles.moneyRight}>
            <div style={styles.middleItem}>
              <div style={styles.redBig}>
                {moneyInfo[2] || 0}
                <span style={styles.redSmall}>元</span>
              </div>
              <div style={{ ...styles.moneyInfo, ...styles.moneyInfo2 }}>
                <img style={styles.coin} src={require('@assets/Alipay/coin.png')} alt="" />
                <div>好友完成淘宝绑卡奖励</div>
              </div>
            </div>

            <div style={{ ...styles.middleItem, marginBottom: 0 }}>
              <div style={styles.redBig}>
                {moneyInfo[4] || 0}
                <span style={styles.redSmall}>元</span>
              </div>
              <div style={{ ...styles.moneyInfo, ...styles.moneyInfo2 }}>
                <img style={styles.coin} src={require('@assets/Alipay/coin.png')} alt="" />
                <div>好友完成支付宝绑卡奖励</div>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.moneyText}>
          <div>数据每2天更新1次。 </div>
          <div>奖励次日发放至待审核，次月25日可提现本月已确认收货的奖励。</div>
        </div>
      </div>
    </>
  );
};
