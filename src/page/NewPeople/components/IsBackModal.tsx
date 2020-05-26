import React, { Component } from 'react';
import * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {
  webkitLineClamp?: any;
  webkitBoxOrient?: any;
}
const styles: { [propName: string]: Style } = {
  modalWrap: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: 100,
    padding: '0 20px',
    boxSizing: 'border-box',
    flexWrap: 'wrap',
  },
  modalContent: {
    width: '100%',
    background: '#FFEFF4',
    borderRadius: '8px',
    padding: '12px',
    boxShadow: '0 6px 16px 0 rgba(0,0,0,0.20)',
  },
  timeWrap: {
    marginBottom: '12px',
    textAlign: 'center',
    fontFamily: 'PingFangSC-Regular',
    color: '#333',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeTextWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#F10D56',
    fontSize: '14px',
    marginRight: '4px',
  },
  modalTitle: {
    textAlign: 'center',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '15px',
    color: '#333',
    lineHeight: '22px',
    marginBottom: '12px',
  },
  productWrap: {
    background: '#fff',
    borderRadius: '4px',
    paddingTop: '12px',
  },
  line: {
    height: '8px',
    width: '100%',
    background: '#f4f4f4',
  },
  proBox: {
    display: 'flex',
    padding: '12px 8px',
  },
  proImg: {
    height: '80px',
    width: '80px',
    marginRight: '8px',
  },
  proInfo: {
    flex: 1,
    display: 'flex',
    alignContent: 'space-between',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
  proName: {
    width: '100%',
    fontSize: '14px',
    fontFamily: 'PingFangSC-Regular',
    color: '#333',
    overflow: 'hidden',
    display: '-webkit-box',
    webkitLineClamp: '1',
    webkitBoxOrient: 'vertical',
    marginBottom: '4px',
    textOverflow: 'ellipsis',
  },
  proNameBox: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  price1: {
    background: '#FEE3EB',
    height: '20px',
    fontSize: '14px',
    color: '#F1004D',
    fontFamily: 'PingFangSC-Medium',
    padding: '0 6px',
    borderRadius: '2px',
    lineHeight: '20px',
  },
  priceBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  priceLabelBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: 'linear-gradient(0deg, #E70B51 0%, #FF729C 100%)',
  },
  priceLabel: {
    width: '18px',
    height: '18px',
    marginLeft: '2px',
  },
  price2: {
    fontSize: '12px',
    color: '#F1004D',
    fontFamily: 'PingFangSC-Regular',
  },
  priceText: {
    fontSize: '26px',
    fontFamily: 'DINAlternate-Bold',
  },
  btnWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '12px',
  },
  btnBox1: {
    width: '42%',
    borderRadius: '22px',
    border: '1px solid #bbb',
    color: '#999',
    fontSize: '16px',
    fontFamily: 'PingFangSC-Regular',
    textAlign: 'center',
    lineHeight: '38px',
  },
  btnBox2: {
    width: '52%',
    borderRadius: '19px',
    color: '#fff',
    fontSize: '16px',
    fontFamily: 'PingFangSC-Regular',
    textAlign: 'center',
    lineHeight: '38px',
    background: 'linear-gradient(0deg, #FC4277 0%, #FF8BAC 100%)',
  },
  closeBtn: {
    width: '32px',
    height: '32px',
    margin: '32px auto 0',
    display: 'block',
  },
};
interface Props {
  timeNum: number;
  time: {
    hours: string;
    minutes: string;
    seconds: string;
  };
  handleBackModal: Function;
  toDetail: Function;
  recommendPro: Array<{
    [propName: string]: any;
  }>;
  backPage: () => void;
}
export default ({ timeNum, time, handleBackModal, toDetail, recommendPro, backPage }: Props) => {
  const renderPro = () => {
    return recommendPro.map((item: { [propName: string]: any }, index: number) => {
      return (
        <div style={styles.productArea} onClick={() => toDetail(item)}>
          <div style={styles.proBox}>
            <img style={styles.proImg} src={item.productImg} alt="" />
            <div style={styles.proInfo}>
              <div style={styles.proNameBox}>
                <div style={styles.proName}>{item.productName}</div>
                <div style={styles.price1}>
                  补贴￥
                  {item.maxSubsidyPrice}
                </div>
              </div>
              <div style={styles.priceBox}>
                <div style={styles.price2}>
                  ￥
                  <span style={styles.priceText}>
                    {Number(item.discountPrice) > Number(item.maxSubsidyPrice)
                      ? (Number(item.discountPrice) - Number(item.maxSubsidyPrice)).toFixed(2)
                      : 0}
                  </span>
                  补贴后
                </div>
                <div style={styles.priceLabelBox}>
                  <img
                    style={styles.priceLabel}
                    src={require('@assets/NewPeople/shopping.png')}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {index !== recommendPro.length - 1 && <div style={styles.line} />}
        </div>
      );
    });
  };
  return (
    <div style={styles.modalWrap}>
      <div style={styles.modalContent}>
        <div style={styles.modalTitle}>
          <div>你的0元购机会还没用</div>
          <div>确定要离开吗？</div>
        </div>
        <div style={styles.productWrap}>
          {timeNum > 0 && (
            <div style={styles.timeWrap}>
              <div>0元购机会倒计时：</div>
              <div style={styles.timeTextWrap}>
                <div style={styles.timeText}>{time.hours}</div>
                <div>:</div>
                <div style={styles.timeText}>{time.minutes}</div>
                <div>:</div>
                <div style={styles.timeText}>{time.seconds}</div>
              </div>
            </div>
          )}
          {renderPro()}
        </div>
        <div style={styles.btnWrap}>
          <div style={styles.btnBox1} onClick={backPage}>
            忍痛离开
          </div>
          <div style={styles.btnBox2} onClick={() => handleBackModal(false)}>
            继续逛逛
          </div>
        </div>
      </div>
      <img
        onClick={() => handleBackModal(false)}
        style={styles.closeBtn}
        src={require('@assets/icon-close.png')}
        alt=""
      />
    </div>
  );
};
