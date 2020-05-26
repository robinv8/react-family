import React, { Component } from 'react';
import * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}
const styles: { [propName: string]: Style } = {
  itemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#fff',
    padding: '10px',
    boxSizing: 'border-box',
  },
  line: {
    width: '100%',
    height: '8px',
    background: '#F6F6F6',
  },
  proMargin: {
    marginBottom: '10px',
  },
  noProduct: {
    background: 'rgba(0, 0, 0, 0.5)',
    width: '80px',
    height: '80px',
    zIndex: 99,
    position: 'absolute',
    top: '32px',
    left: '32px',
    borderRadius: '50%',
  },
  noProductText1: {
    fontFamily: 'PingFangSC-Regular',
    color: '#fff',
    fontSize: '16px',
    textAlign: 'center',
    marginTop: '22px',
  },
  noProductText2: {
    fontFamily: 'PingFangSC-Regular',
    color: '#fff',
    fontSize: '10px',
    textAlign: 'center',
  },
  imgWrap: {
    width: '128px',
    height: '128px',
    background: '#ccc',
    marginRight: '8px',
    borderRadius: '4px',
    overflow: 'hidden',
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '100%',
    display: 'block',
  },
  productInfo: {
    flex: 1,
    display: 'flex',
    alignContent: 'space-between',
    flexWrap: 'wrap',
  },
  name: {
    fontSize: '14px',
    fontFamily: 'PingFangSC-Medium',
    color: '#333',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    width: '100%',
    marginBottom: '4px',
  },
  priceWrap: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
  },
  priceText: {
    fontSize: '11px',
    fontFamily: 'PingFangSC-Regular',
    color: '#F1004D',
  },
  priceSize: {
    fontSize: '26px',
    fontFamily: 'DINAlternate-Bold',
  },
  originalPrice: {
    fontSize: '12px',
    fontFamily: 'PingFangSC-Regular',
    textDecoration: 'line-through',
    color: '#999',
    marginLeft: '2px',
  },
  payPriceWrap: {
    fontSize: '10px',
    fontFamily: 'PingFangSC-Regular',
    color: '#F1004D',
    height: '16px',
    lineHeight: '16px',
    borderRadius: '2px',
    border: '1px solid #F1004D',
    padding: '0 3px',
    width: 'auto',
    display: 'inline-block',
    marginTop: '10px',
  },

  progress: {
    width: '128px',
    background: 'linear-gradient(-270deg, rgba(248,17,77,0.25) 0%, rgba(231,10,80,0.38) 95%)',
    marginTop: '9px',
    position: 'relative',
    borderRadius: '9px',
  },
  normal: {
    width: '100%',
    height: '14px',
    boxSizing: 'border-box',
    fontSize: '10px',
    color: '#F1004D',
    borderRadius: '9px',
    overflow: 'hidden',

    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
  },
  topProgress: {
    width: '100%',
    height: '14px',
    boxSizing: 'border-box',
    fontSize: '10px',
    color: '#fff',

    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    background: 'linear-gradient(-270deg, #FF4628 0%, #F60752 98%)',
    borderRadius: '9px',

    display: 'flex',
    alignItems: 'center',
  },
  progressText: {
    display: 'inline-block',
    textAlign: 'right',
    marginLeft: '94px',
    lineHeight: '0',
  },
  topProgressText: {
    display: 'inline-block',
    textAlign: 'right',
    marginLeft: '94px',
    lineHeight: '0',
  },
  wrap2: {
    background: '#FEE3EB',
    height: '20px',
    fontSize: '14px',
    color: '#F1004D',
    fontFamily: 'PingFangSC-Medium',
    padding: '0 6px',
    borderRadius: '2px',
    lineHeight: '20px',
  },
  pRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'linear-gradient(0deg, #E70B51 0%, #FF729C 100%)',
  },
  pRightS: {
    width: '56px',
    background: 'rgb(205, 205, 205)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '32px',
    fontSize: '10px',
    color: '#fff',
    fontFamily: 'PingFangSC-Regular',
    borderRadius: '16px',
  },
  pRight2: {
    width: '20px',
    height: '20px',
    marginLeft: '2px',
  },
  storeLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '2px',
    background: '#FFC800',
    color: '#fff',
    fontSize: '11px',
    fontFamily: 'PingFangSC-Regular',
    textAlign: 'center',
    lineHeight: '17px',
    padding: '0 4px',
  },
};

interface Props {
  list: Array<{
    [propName: string]: any;
  }>;
  isStore: boolean;
  toDetail: Function;
}
declare global {
  interface Window {
    lib: any;
  }
}
export default ({ list, isStore, toDetail }: Props) => {
  const imgHelper = window.lib.img({
    class: 'lib-img', // 图片class
    dataSrc: 'data-src', // 图片真实src 的data字段
    size: '320x320', // cdn尺寸
    sharpen: 's0', // 锐化参数
    q: ['q100', 'q50'], // 图片质量[非弱网，弱网]
    enableLazyload: true, // 是否开启懒加载功能，默认true,
    lazyHeight: 0, // [可选]，预加载当前屏幕以下lazyHeight内的图片，默认0
    lazyWidth: 0, // [可选]，预加载当前屏幕右边lazyWidth内的图片，默认0
    enalbeIOSWifiLoadMore: false, // ios&&wifi情况下 是否取消懒加载,采用一次性加载，默认false
  });
  return list.map((item, index) => {
    return (
      <div key={item.id}>
        <div style={styles.itemContainer} onClick={() => toDetail(item)}>
          <div style={styles.imgWrap}>
            {item.productImg.indexOf('alicdn') > -1 ? (
              <img
                className="lib-img"
                data-size="320x320"
                data-type="heightFixed"
                data-original
                style={styles.img}
                src={imgHelper.getNewUrl(item.productImg)}
                alt=""
              />
            ) : (
              <img style={styles.img} src={item.productImg} alt="" />
            )}

            {isStore && <div style={styles.storeLabel}>门店自营</div>}
            {/* {
              Number(item.percent) === 100 && (
                <div style={styles.noProduct}>
                  <div style={styles.noProductText1}>已抢光</div>
                  <div style={styles.noProductText2}>SOLD OUT</div>
                </div>
              )
            } */}
          </div>
          <div style={styles.productInfo}>
            <div>
              <div style={styles.name}>{item.productName}</div>
              {/* <div style={styles.progress}>
                <div style={styles.normal}>
                  <span style={styles.progressText}>{item.percent}%</span>
                </div>
                <div style={{...styles.topProgress, width: (Number(item.percent) !== 0 && Number(item.percent) < 6) ? '5%' : `${item.percent}%`}}>
                  <span style={styles.topProgressText}>{item.percent}%</span>
                </div>
              </div> */}
              <span style={styles.wrap2}>
                补贴￥
                {item.maxSubsidyPrice}
              </span>
            </div>
            <div style={styles.priceWrap}>
              <div style={styles.priceText}>
                ￥
                <span style={styles.priceSize}>
                  {Number(item.discountPrice) > Number(item.maxSubsidyPrice)
                    ? (Number(item.discountPrice) - Number(item.maxSubsidyPrice)).toFixed(2)
                    : 0}
                </span>
                补贴后
              </div>
              {Number(item.percent) === 100 || Number(item.salesNum) >= Number(item.limitNum) ? (
                <div style={styles.pRightS}>已抢完</div>
              ) : (
                <div style={styles.pRight}>
                  <img
                    style={styles.pRight2}
                    src={require('@assets/NewPeople/shopping.png')}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {index !== list.length - 1 && <div style={styles.line} />}
      </div>
    );
  });
};
