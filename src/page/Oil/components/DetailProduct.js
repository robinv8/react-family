import React from 'react';

const styles = {
  pWrap: {
    padding: '12px 12px 8px',
    display: 'flex',
    alignItems: 'flex-start',
    background: '#fff',
    borderRadius: '4px',
  },
  pImg: {
    width: '54px',
    height: '54px',
    marginRight: '10px',
  },
  pRight: {
    width: '80%',
  },
  title: {
    width: '100%',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '16px',
    color: '#333333',
    lineHeight: '16px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  priceWrap: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  price: {
    fontSize: '12px',
    color: '#E00413',
  },
  price1: {
    fontSize: '16px',
    fontFamily: 'PingFangSC-Semibold',
  },
  priceRight: {
    background: '#DFB453',
    borderRadius: '12px',
    width: '65px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconNav: {
    width: '14px',
    height: '14px',
    marginRight: '4px',
  },
  navText: {
    fontSize: '14px',
    color: '#fff',
  },
  flexWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  downWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    background: '#E00413',
    borderRadius: '2px 0px 0px 2px',
  },
  iconDown: {
    width: '10px',
    height: '12px',
  },
  coupon: {
    width: '60px',
    textAlign: 'center',
    lineHeight: '18px',
    height: '18px',
    border: '1px solid #E00413',
    borderRadius: '0 2px 2px 0',
    fontSize: '12px',
    color: '#E00413',
  },
  vipRights: {
    background: '#2C2616',
    padding: '4px',
    borderRadius: '2px',
    fontSize: '11px',
    color: '#FFD57E',
    marginLeft: '8px',
  },
  distance: {
    height: '20px',
    lineHeight: '20px',
    fontSize: '12px',
    color: '#999',
  },
  top6: {
    marginTop: '6px',
  },
  line: {
    width: '100%',
    height: '1px',
    background: '#efefef',
    margin: '12px 0 8px',
  },
  address: {
    width: '100%',
  },
  iconPosition: {
    width: '12px',
    height: '14px',
    marginRight: '6px',
  },
  addressText: {
    width: '100%',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#333333',
    lineHeight: '16px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

export default class OilProduct extends React.Component {
  render() {
    const { jumpNativeMap, data, priceObj } = this.props;
    if (!data) {
      return;
    }
    return (
      <div style={styles.pWrap}>
        <img src={data.gasLogoSmall} alt="" style={styles.pImg} />
        <div style={styles.pRight}>
          <div style={styles.title}>{data.gasName}</div>
          <div style={styles.priceWrap}>
            <div style={styles.price}>
              <span>¥</span>
              <span style={styles.price1}>{priceObj.price}</span>
              <span>/升/{priceObj.oilNo}#</span>
            </div>
            <div style={styles.priceRight}>
              <img src={require('@assets/Oil/icon-nav.png')} alt="" style={styles.iconNav} />
              <span style={styles.navText} onClick={() => jumpNativeMap()}>
                导航
              </span>
            </div>
          </div>

          <div style={{ ...styles.priceWrap, ...styles.top6 }}>
            <div style={styles.flexWrap}>
              <div style={styles.flexWrap}>
                <div style={styles.downWrap}>
                  <img src={require('@assets/Oil/icon-down.png')} alt="" style={styles.iconDown} />
                </div>
                <div style={styles.coupon}>直降{priceObj.discountPrice}</div>
              </div>
            </div>
            <span style={styles.distance}>{data.distance}</span>
          </div>

          <div style={styles.line}></div>

          <div style={{ ...styles.flexWrap, ...styles.address }}>
            <img src={require('@assets/Oil/icon-address.png')} alt="" style={styles.iconPosition} />
            <div style={styles.addressText}>{data.gasAddress}</div>
          </div>
        </div>
      </div>
    );
  }
}
