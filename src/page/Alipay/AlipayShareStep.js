import React, { PureComponent } from 'react';

const wWidth = window.innerWidth;
const scaleSize = size => {
  return Math.floor((wWidth / 375) * size);
};
const styles = {
  content: {
    width: '100%',
    background: 'rgb(255, 97, 79)',
  },
  imgWrap: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    display: 'block',
    verticalAlign: 'top',
    background: 'rgb(255, 69, 51)',
  },
  stepWrap: {
    width: '286px',
    height: 30,
    border: '1px solid rgba(255, 255, 255, 1)',
    position: 'absolute',
    top: scaleSize(10),
    left: scaleSize(13),
    display: 'flex',
    alignItems: 'center',
    borderRadius: '6px',
  },
  stepBg: {
    width: '69px',
    height: '30px',
    marginRight: '6px',
  },
  stepText: {
    position: 'absolute',
    top: 0,
    left: '10px',
    fontSize: scaleSize(15),
    fontFamily: 'PingFangSC-Medium',
    color: '#FF1901',
    lineHeight: '30px',
  },
  stepText2: {
    fontSize: scaleSize(15),
    fontFamily: 'PingFangSC-Medium',
    color: '#FFF',
    lineHeight: '30px',
    whiteSpace: 'nowrap',
  },
  info: {
    width: '100%',
    position: 'absolute',
    top: scaleSize(52),
    left: 0,
    boxSizing: 'border-box',
    padding: '0 13px',
    fontSize: scaleSize(13),
    fontFamily: 'PingFangSC-Medium',
    color: '#FFF',
    lineHeight: '18px',
  },
};

export default class AlipayShareStep extends PureComponent {
  render() {
    return (
      <div style={styles.content}>
        <div style={styles.imgWrap}>
          <img style={styles.img} alt="" src={require('@assets/Alipay/tu01.png')} />
        </div>

        <div style={styles.imgWrap}>
          <img style={styles.img} alt="" src={require('@assets/Alipay/tu02.png')} />
          <div style={styles.stepWrap}>
            <img style={styles.stepBg} alt="" src={require('@assets/Alipay/s-title.png')} />
            <span style={styles.stepText}>第1步</span>
            <span style={styles.stepText2}>教新人下载“米粒生活”</span>
          </div>
          <div style={styles.info}>
            点击活动页面【分享邀请海报】，保存图片，发给好友，微信扫描完成米粒生活下载。
          </div>
        </div>

        <div style={styles.imgWrap}>
          <img
            style={{ ...styles.img, position: 'relative', bottom: '-2px' }}
            alt=""
            src={require('@assets/Alipay/tu03.png')}
          />
          <img style={styles.img} alt="" src={require('@assets/Alipay/tu04.png')} />
          <div style={{ ...styles.stepWrap, width: '93%' }}>
            <img style={styles.stepBg} alt="" src={require('@assets/Alipay/s-title.png')} />
            <span style={styles.stepText}>第2步</span>
            <span style={styles.stepText2}>教新人领取淘宝专属10元红包，完成首单</span>
          </div>
          <div style={styles.info}>
            引导新人点击活动页面【新人领红包】，输入手机号领取新人专属10元红包，下载淘宝完成注册。
          </div>
        </div>

        <div style={styles.imgWrap}>
          <img
            style={{ ...styles.img, position: 'relative', top: '-2px' }}
            alt=""
            src={require('@assets/Alipay/tu05.png')}
          />
          <div style={{ ...styles.stepWrap, width: 311, top: scaleSize(20) }}>
            <img style={styles.stepBg} alt="" src={require('@assets/Alipay/s-title.png')} />
            <span style={styles.stepText}>第3步</span>
            <span style={styles.stepText2}>教新人领取支付宝专属新人红包</span>
          </div>
          <div style={{ ...styles.info, top: scaleSize(62) }}>
            教新人在米粒生活内填写手机号，领取新人红包，完成支付宝下载。
          </div>
        </div>

        <div style={styles.imgWrap}>
          <img style={styles.img} alt="" src={require('@assets/Alipay/tu06.png')} />
          <div style={{ ...styles.stepWrap, width: '93%', top: scaleSize(20) }}>
            <img style={styles.stepBg} alt="" src={require('@assets/Alipay/s-title.png')} />
            <span style={styles.stepText}>第4步</span>
            <span style={styles.stepText2}>选择“淘宝账户登录”，领取新人专属红包</span>
          </div>
        </div>

        <div style={styles.imgWrap}>
          <img style={styles.img} alt="" src={require('@assets/Alipay/tu07.png')} />
          <div style={{ ...styles.stepWrap, width: '93%', top: '10px' }}>
            <img style={styles.stepBg} alt="" src={require('@assets/Alipay/s-title.png')} />
            <span style={styles.stepText}>第5步</span>
            <span style={styles.stepText2}>新用户完善信息，邀请人再获得奖励</span>
          </div>
          <div style={{ ...styles.info }}>
            新用户完善身份信息，进行实名认证并绑定银行卡。完善信息后，邀请人再获得40元现金奖励。
          </div>
        </div>

        <div style={styles.imgWrap}>
          <img style={styles.img} alt="" src={require('@assets/Alipay/tu08.png')} />
          <div style={{ ...styles.stepWrap, width: '93%', top: scaleSize(15) }}>
            <img style={styles.stepBg} alt="" src={require('@assets/Alipay/s-title.png')} />
            <span style={styles.stepText}>第6步</span>
            <span style={styles.stepText2}>引导新人在米粒生活领取0元免单福利</span>
          </div>
          <div style={{ ...styles.info, top: scaleSize(57) }}>
            引导新人在米粒生活新人免单专区，领取0元免单福利，新人下单付款后米粒生活立即全额返现。此时邀请人再得佣金奖励。
          </div>
        </div>
      </div>
    );
  }
}
