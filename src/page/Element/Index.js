/*
 * @Descrition: 文件描述
 * @Author: Da Shuai
 * @Date: 2020-03-10 14:10:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-09 09:30:16
 * @FilePath: /vxiaoke-h5-active/src/page/Element/Index.js
 */
import React, { PureComponent } from 'react';
import { getElementUrl } from '@api';
import { Toast } from 'antd-mobile';
const styles = {
  content: {
    position: 'relative',
    background: '#DA1A1D',
  },
  bg1: {
    width: '100%',
    display: 'block',
    minHeight: '365px',
  },
  bg2: {
    minHeight: '280px',
  },
  bg3: {
    minHeight: '270px',
  },
  bg4: {
    width: '100%',
    minHeight: '304px',
    display: 'block',
  },
  wrapBox: {
    position: 'absolute',
    top: '38%',
    left: 0,
    background: 'rgba(255, 255 ,255, 0)',
  },
  main: {
    padding: '0 6px 0 10px',
  },
  stepBox: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    boxSizing: 'border-box',
    padding: '14% 7% 0',
  },
  stepTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 25px',
    boxSizing: 'border-box',
  },
  stepTop2: {
    marginTop: '10px',
    fontSize: '15px',
    color: '#333',
    fontFamily: 'PingFangSC-Medium',
  },
  icon: {
    width: '40px',
    height: '40px',
  },
  arrow: {
    width: '40px',
    height: '5px',
  },
  button: {
    width: '95%',
    height: '46px',
    margin: '8% auto 0',
    background: 'linear-gradient(-12deg,rgba(252,143,33,1) 0%,rgba(241,92,19,1) 100%)',
    boxShadow: '5px 9px 20px 0px rgba(231,102,37,0.3)',
    fontSize: '18px',
    color: 'rgba(252,246,247,1)',
    lineHeight: '46px',
    textAlign: 'center',
    fontFamily: 'PingFangSC-Medium',
    borderRadius: '23px',
  },
  title: {
    fontSize: '15px',
    color: '#E6322E',
    fontFamily: 'PingFangSC-Medium',
    marginTop: '20px',
  },
  rule: {
    fontSize: '13px',
    lineHeight: '19px',
    color: '#E6322E',
    fontFamily: 'PingFangSC-Regular',
    marginTop: '10px',
  },
  noticeBox: {
    marginTop: '18px',
    padding: '0 16px',
  },
  noticeTitle: {
    fontSize: '14px',
    color: '#fff',
    fontFamily: 'PingFangSC-Semibold',
  },
  noticeRule: {
    fontSize: '12px',
    color: '#fff',
    fontFamily: 'PingFangSC-Regular',
    lineHeight: '19px',
    marginTop: '8px',
  },
};
export default class Element extends PureComponent {
  componentDidMount() {}
  canDo = true;

  getEleUrl = async () => {
    if (!this.canDo) {
      return;
    }

    Toast.loading(
      '加载中...',
      3,
      () => {
        this.canDo = true;
      },
      true,
    );
    const res = await getElementUrl();
    if (res && !res.code) {
      this.canDo = false;
      const params = {
        isVerifity: true,
        isJump: true,
        jumpInfo: {
          type: 'TB',
          url: res.activityLinks,
        },
      };
      console.log('页面传递参数：', params);
      window.postMessage(JSON.stringify(params));
      // Toast.hide();
    } else {
      // Toast.hide();
      this.canDo = true;
    }
  };

  render() {
    return (
      <div style={styles.content}>
        <img src={require('@assets/Element/bg1.png')} style={styles.bg1} alt="" />
        <img
          src={require('@assets/Element/bg2.png')}
          style={{ ...styles.bg1, ...styles.bg2 }}
          alt=""
        />
        <img
          src={require('@assets/Element/bg3.png')}
          style={{ ...styles.bg1, ...styles.bg3 }}
          alt=""
        />
        <div style={styles.wrapBox}>
          <div style={styles.main}>
            <img src={require('@assets/Element/bg4.png')} style={styles.bg4} alt="" />
            <div style={styles.stepBox}>
              <div style={styles.stepTop}>
                <img src={require('@assets/Element/icon1.png')} style={styles.icon} alt="" />
                <img src={require('@assets/Element/icon2.png')} style={styles.icon} alt="" />
                <img src={require('@assets/Element/icon3.png')} style={styles.icon} alt="" />
              </div>

              <div style={{ ...styles.stepTop, ...styles.stepTop2 }}>
                <span>先领券</span>
                <img src={require('@assets/Element/arrow.png')} style={styles.arrow} alt="" />
                <span>再下单</span>
                <img src={require('@assets/Element/arrow.png')} style={styles.arrow} alt="" />
                <span>等返佣</span>
              </div>

              <div style={styles.button} onClick={this.getEleUrl}>
                点外卖拿福利>
              </div>

              <div style={styles.title}>返利规则说明：</div>
              <div style={styles.rule}>
                每笔订单的返现金额=用户实付金额*按照每个卖家实际设置的佣金比例分成。(6%保底)
              </div>
            </div>
          </div>

          <div style={styles.noticeBox}>
            <div style={styles.noticeTitle}>注意事项：</div>
            <div style={styles.noticeRule}>
              1、必须跳转到最新版本手机淘宝（iOS V8.11.1/Android
              V8.11.0及以上）领券，领券后7天内用券下单均有返佣；跳转到其余版本的手机淘宝账户须与饿了么账号绑定。
            </div>
            <div style={styles.noticeRule}>
              2、佣金计算以实际支付金额为准，下单后约30分钟同步到订单，确认收货后的次月25日结算佣金。
            </div>
            <div style={styles.noticeRule}>3、仅限饿了么品质联盟商户订单有返佣；</div>
            <div style={styles.noticeRule}>
              4、如果饿了么活动页面上推荐的店铺你不喜欢，请打开饿了么APP，搜索你喜欢的门店，通过米粒生活领券后7天内用券下单仍有返佣。
            </div>
          </div>
        </div>
      </div>
    );
  }
}
