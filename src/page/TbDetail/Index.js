/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import { Toast } from 'antd-mobile';
import 'swiper/dist/css/swiper.min.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  getTBProDetail,
  getTBStoreDetail,
  getStoreScore,
  getTBProDetailInfo,
} from '../../service/api';

export default class ProductDetail extends Component {
  state = {
    swiperList: [],
    pid: '',
    detailInfo: {},
    detailImgs: [],
    tags: [],
    noData: false,
    specsValue: {},
    shareUserId: '',
    storeInfo: {},
    storeScore: {},
  };

  componentDidMount() {
    const { pid, shareId } = this.props.match.params;
    this.setState(
      {
        shareUserId: shareId,
        pid,
      },
      () => {
        this.getPrdDetail();
        this.getStoreScore();
        this.getTBProDetailInfo();
      },
    );
  }

  jumpToApp = () => {
    setTimeout(() => {
      window.location.href = `https://www.vxiaoke360.com/H5/mlsh-download/index.html?t=${10000 *
        Math.random()}`;
    }, 500);
  };

  startSwiper = () => {
    new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    });
  };

  async getTBStoreDetail(params) {
    const res = await getTBStoreDetail(params);
    if (res) {
      this.setState({
        storeInfo: res,
      });
    }
  }

  async getStoreScore() {
    const { pid } = this.state;
    const res = await getStoreScore(pid);
    if (res) {
      this.setState({
        storeScore: res,
      });
    }
  }

  async getTBProDetailInfo() {
    const { pid } = this.state;
    const res = await getTBProDetailInfo(pid);
    if (res && res.length > 0) {
      this.setState({
        detailImgs: res,
      });
    }
  }

  async getPrdDetail() {
    const { pid, shareUserId } = this.state;
    Toast.loading('加载中...', 0);
    const params = {
      pid,
      shareUserId,
    };
    const res = await getTBProDetail(params);
    console.log('getPrdDetail', res);
    if (res) {
      if (res.shopTitle) {
        this.getTBStoreDetail(res.shopTitle);
      }
      if (res.imageUrls && res.imageUrls.length) {
        this.setState(
          {
            swiperList: res.imageUrls,
          },
          () => this.startSwiper(),
        );
      }
      this.setState({
        detailInfo: res,
        tags: res.tags,
      });
    } else {
      this.setState({
        noData: true,
      });
      this.props.history.goBack();
    }
    Toast.hide();
  }

  renderScore = scoreArr => {
    return scoreArr.map((item, index) => {
      return (
        <div key={index}>
          <div style={styles.scoreItem}>
            {item.title}
            <span style={styles.scoreText}>{item.score}</span>
          </div>
        </div>
      );
    });
  };

  renderDetails = () => {
    const { detailImgs, detailInfo } = this.state;
    if (detailImgs.length > 0) {
      return detailImgs.map((item, index) => {
        return <img key={index} style={styles.detailImg} src={item} alt="" />;
      });
    } else {
      if (detailInfo && detailInfo.details && detailInfo.details.length > 0) {
        return detailInfo.details
          .filter(item => item.type === 1)
          .map((item, index) => {
            return <img key={index} style={styles.detailImg} src={item.text} alt="" />;
          });
      }
    }
  };

  render() {
    const { swiperList, detailInfo, noData, storeInfo, storeScore } = this.state;
    return (
      <div>
        <div style={styles.topBar} onClick={this.jumpToApp}>
          <img style={styles.openImg} src={require('@assets/tbProDetail/openApp.png')} alt="" />
        </div>
        {!noData && (
          <div>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {swiperList.map((item, index) => {
                  return (
                    <div key={index} className="swiper-slide">
                      <div style={styles.imgWrap}>
                        <img alt="" style={styles.swiperImg} src={item} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="swiper-pagination swiper-pagination2" />
            </div>
            <div style={{ ...styles.backgroundS }}>
              <div style={{ ...styles.flexRow, paddingTop: '14px' }}>
                <div style={{ ...styles.flexRow, alignItems: 'center' }}>
                  {detailInfo.discountPrice !== '0' ? (
                    <div>
                      <span style={styles.money}>￥</span>
                      <span style={styles.num}>{detailInfo.discountPrice}</span>
                      {detailInfo.couponPrice > 0 ? (
                        <span style={styles.moneyText}>劵后</span>
                      ) : (
                        <span style={styles.moneyText}>优惠价</span>
                      )}
                    </div>
                  ) : null}

                  <div style={styles.downLoadAppLable} onClick={this.jumpToApp}>
                    下载米粒生活APP，享更多优惠>>
                  </div>
                </div>
              </div>
              <div style={styles.grayText}>
                淘宝原价￥
                <span style={styles.lineThrough}>{detailInfo.zkFinalPrice}</span>
              </div>
              <div
                style={{
                  ...styles.flexRow,
                  marginBottom: '8px',
                  paddingBottom: '12px',
                }}
              >
                <div style={{ ...styles.midllText, ...styles.titleWRap }}>
                  <img
                    src={
                      detailInfo.source === 0
                        ? require('@assets/tbProDetail/icon-tb.png')
                        : require('@assets/tbProDetail/icon-tm.png')
                    }
                    style={styles.titleIcon}
                    alt=""
                  />
                  <span style={styles.longText}>{detailInfo.title}</span>
                </div>
              </div>
              {Number(detailInfo.couponPrice) > 0 && (
                <CopyToClipboard
                  text={detailInfo.model}
                  onCopy={() =>
                    Toast.info(`淘口令已复制成功，${detailInfo.model}打开淘宝APP即可购买`)
                  }
                >
                  <div style={styles.quanWrap}>
                    <img
                      alt=""
                      style={styles.bgQuan}
                      src={require('@assets/tbProDetail/img-quan-tb.png')}
                    />
                    <div style={{ ...styles.quanInfo, ...styles.flexRow }}>
                      <div style={styles.quanPriceArea}>
                        <div style={styles.quanPriceWrap}>
                          <span style={styles.quanPrice}>{detailInfo.couponPrice}元</span>
                          <span style={styles.quanText}>
                            {detailInfo.tbkCouponConvert && detailInfo.tbkCouponConvert.coupon_info}
                          </span>
                        </div>
                        <div style={styles.quanTextWrap}>
                          使用期限：
                          {detailInfo.tbkCouponConvert &&
                            detailInfo.tbkCouponConvert.coupon_start_time &&
                            detailInfo.tbkCouponConvert.coupon_end_time &&
                            `${detailInfo.tbkCouponConvert.coupon_start_time}-${detailInfo.tbkCouponConvert.coupon_end_time}`}
                        </div>
                      </div>
                      <div style={styles.quanBtn}>立即领取</div>
                    </div>
                  </div>
                </CopyToClipboard>
              )}
            </div>
            <div style={styles.proInfoWrap}>
              <div style={styles.recommendTitle}>
                <img style={styles.storeAvatar} src={require('@assets/app-icon.png')} alt="" />
                <div style={styles.storeName}>小编推荐</div>
              </div>
              <div style={styles.recommendInfo}>{storeScore.itemdesc}</div>
            </div>
            {storeInfo.shopTitle && (
              <div style={styles.proInfoWrap}>
                <div style={styles.storeInfoWrap}>
                  <img style={styles.storeImg} src={storeInfo.shopIcon} alt="" />
                  <div style={styles.storeInfoBox}>
                    <div style={styles.storeTitle}>{storeInfo.shopTitle}</div>
                    <div style={styles.storeType}>{detailInfo.source === 0 ? '淘宝' : '天猫'}</div>
                  </div>
                </div>
                {storeScore.evaluates && storeScore.evaluates.length > 0 && (
                  <div style={styles.scoreWrap}>{this.renderScore(storeScore.evaluates)}</div>
                )}
              </div>
            )}
            <div style={styles.paddBorder}>
              <div style={styles.toptitle}>
                <img
                  style={styles.titleImg}
                  src={require('@assets/tbProDetail/detail-title1.png')}
                  alt=""
                />
                <div style={styles.titleText}>商品详情</div>
                <img
                  style={styles.titleImg}
                  src={require('@assets/tbProDetail/detail-title1.png')}
                  alt=""
                />
              </div>
            </div>
            <div style={styles.proDetail}>{this.renderDetails()}</div>
          </div>
        )}
        <CopyToClipboard
          text={detailInfo.model}
          onCopy={() => Toast.info(`淘口令已复制成功，${detailInfo.model}打开淘宝APP即可购买`)}
          style={styles.copyCodeBtn}
        >
          <span>复制淘口令 打开淘宝</span>
        </CopyToClipboard>
        {noData && (
          <div style={styles.shopNullText}>
            <div style={styles.noShop}>商品不存在</div>
          </div>
        )}
      </div>
    );
  }
}
const styles = {
  imgWrap: {
    width: '100%',
    height: '375px',
  },
  scoreWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '14px',
  },
  scoreItem: {
    fontSize: '12px',
    fontFamily: 'PingFangSC-Regular',
    color: '#666',
  },
  scoreText: {
    color: '#333',
    marginLeft: '4px',
  },
  storeInfoWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  storeInfoBox: {
    flex: 1,
  },
  storeImg: {
    width: '36px',
    height: '36px',
    marginRight: '8px',
  },
  storeTitle: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    color: '#333',
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: '4px',
  },
  storeType: {
    background: '#fc4277',
    borderRadius: '24px',
    lineHeight: '18px',
    color: '#fff',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    width: '39px',
    textAlign: 'center',
  },
  shopNullText: {
    position: 'absolute',
    width: '100%',
    height: 'calc(100vh - 50px)',
    left: 0,
    textAlign: 'center',
    background: '#fff',
    zIndex: '1000',
  },
  noShop: {
    color: '#333',
    fontSize: '14px',
    marginTop: '200px',
    textAlign: 'center',
  },
  swiperImg: {
    width: '100%',
    height: '100%',
  },
  topBar: {
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
    top: 0,
    left: 0,
  },
  openImg: {
    width: '100%',
    height: 'auto',
    verticalAlign: 'bottom',
  },
  backgroundS: {
    background: '#fff',
    marginBottom: '8px',
    padding: '0 12px',
  },
  bewFlex: {
    display: 'flex',
    alignItems: 'center',
  },
  flexRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commingShop: {
    padding: '12px',
    backgroundColor: '#fff',
    marginBottom: '8px',
  },
  tianmaoText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    color: '#333',
  },
  tianmaoLable: {
    width: '32px',
    height: '14px',
    fontSize: '10px',
    lineHeight: '14px',
    backgroundColor: '#FA0130',
    borderRadius: '22px',
    textAlign: 'center',
    color: '#fff',
    marginTop: '8px',
  },
  shopDescrition: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#999',
    marginTop: '17px',
  },
  commingShopBtn: {
    width: '76px',
    height: '30px',
    lineHeight: '30px',
    textAlign: 'center',
    border: '1px solid #FC4277',
    color: '#FC4277',
    fontFamily: 'PingFangSC-Regular',
    borderRadius: '16px',
  },
  longText: {
    wordBreak: 'break-word',
  },
  midllText: {
    verticalAlign: 'bottom',
  },
  titleWRap: {
    display: 'flex',
  },
  money: {
    fontSize: '12px',
    color: '#FC4277',
    fontFamily: 'PingFangSC-Semibold',
  },
  num: {
    fontSize: '22px',
    fontFamily: 'DINAlternate-Bold',
    color: '#FC4277',
  },
  moneyText: {
    fontSize: '10px',
    fontFamily: 'PingFangSC-Regular',
    color: '#FC4277',
  },
  saleText: {
    fontSize: '12px',
    fontFamily: 'PingFangSC-Regular',
    color: '#999',
  },
  grayText: {
    fontSize: '12px',
    color: '#999',
    fontFamily: 'PingFangSC-Regular',
    margin: '4px 0 10px',
  },
  lineThrough: {
    textDecoration: 'line-through',
  },
  titleIcon: {
    width: '14px',
    height: '14px',
    marginRight: '4px',
    marginBottom: '-2px',
  },
  descritionText: {
    fontSize: '15px',
    color: '#333',
    fontFamily: 'PingFangSC-Medium',
    marginLeft: '5px',
  },
  quanWrap: {
    position: 'relative',
    paddingBottom: '12px',
    width: '100%',
    height: 100,
  },
  quanBtn: {
    fontSize: '15px',
    color: '#fc4277',
    fontFamily: 'PingFangSC-Medium',
    lineHeight: '35px',
    width: '88px',
    textAlign: 'center',
    borderRadius: '17px',
    background: 'linear-gradient(-180deg, #fff, hsla(0, 0%, 100%, 0.8))',
  },
  bgQuan: {
    width: '100%',
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  quanInfo: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    zIndex: 99,
    boxSizing: 'border-box',
    padding: '20px 10px 0 20px',
    justifyContent: 'space-between',
    width: '100%',
  },
  quanPriceWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: 8,
    width: '100%',
  },
  quanPriceArea: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  quanText: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: '13px',
    color: '#fff',
    marginBottom: 6,
  },
  quanPrice: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: '24px',
    color: '#fff',
    marginRight: '4px',
  },
  quanTextWrap: {
    lineHeight: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: '#fff',
    borderRadius: '2px',
    fontSize: '11px',
    marginTop: '7px',
    padding: '0 6px',
  },
  addviceWrap: {
    padding: '12px',
    backgroundColor: '#fff',
    margin: '8px 0',
  },
  topAddviceText: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
  },
  addviceText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    color: '#333',
    marginLeft: '8px',
  },
  addviceContent: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#666',
  },
  proInfoWrap: {
    width: '100%',
    backgroundColor: '#fff',
    padding: '15px 12px',
    boxSizing: 'border-box',
    borderBottom: '8px solid #f4f4f4',
  },
  infoWrap: {
    width: '100%',
    marginTop: 8,
  },
  toptitle: {
    display: 'flex',
    alignItems: 'center',
    width: '110px',
    margin: 'auto',
  },
  titleImg: {
    width: '10px',
    height: '10px',
  },
  titleText: {
    fontSize: '18px',
    color: '#333',
    fontFamily: 'PingFangSC-Medium',
    padding: '0 9px',
  },
  paddBorder: {
    borderBottom: '0.5px solid #ddd',
    background: '#fff',
    marginBottom: '4px',
    padding: '12px 0',
  },
  proDetail: {
    paddingBottom: 48,
  },
  detailImg: {
    width: '100%',
    verticalAlign: 'bottom',
  },
  downLoadAppLable: {
    position: 'absolute',
    right: 0,
    lineHeight: '28px',
    textAlign: 'center',
    background: '#FFF1D7',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#8B572A',
    padding: '0 10px',
    borderRadius: '15px 0 0 15px',
  },
  recommendTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  storeName: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    color: '#333',
  },
  storeAvatar: {
    marginRight: '8px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
  },
  recommendInfo: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#666',
    margin: '12px 0 8px',
    lineHeight: '18px',
  },
  copyCodeBtn: {
    color: '#fff',
    fontSize: '18px',
    fontFamily: 'PingFangSC-Medium',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 99,
    width: '100%',
    lineHeight: '52px',
    background: 'linear-gradient(46deg, #fc4277, #f731bc)',
  },
};
